import { useEffect, useState } from 'react';
import AnswerMain from '../../page-layout/QuestionPage/Main/AnswerMain';
import Badge from '../../common/Badge/Badge';
import DropdownKebab from '../../common/DropdownKebab/DropdownKebab';
import Question from '../Question/Question';
import Reaction from '../../common/Reaction/Reaction';
import { useCreateRejectedAnswer, useQuestionDelete } from '../../../hooks/useQuestion';
import { axiosBaseURL } from '../../../apis/axiosBaseURL';

import styles from './FeedCard.module.css';

export default function FeedCard({ data, showKebab }) {
  const { id, answer, createdAt, content, like, dislike } = data;

  // Kebab
  const noAnswerList = ['답변거절'];
  const answerList = ['수정하기', '삭제하기'];

  //
  const [editCheck, setEditCheck] = useState(false);

  const handleButtonClick = async (e) => {
    if (e.target.innerText === '수정하기') {
      setEditCheck(true);

      // 컴포넌트 호출
      console.log(e.target.innerText);
    }

    if (e.target.innerText === '삭제하기') {
      await useQuestionDelete(`questions/${id}/`);
    }

    if (e.target.innerText === '답변거절') {
      // 커스텀 훅으로 사용하고싶으나 405error발생 : 수정필요
      // useCreateRejectedAnswer(`questions/${id}/answers/`);

      await axiosBaseURL.post(
        `questions/${id}/answers/`,
        {
          content: 'isRejected',
          isRejected: true,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  };

  return (
    <div className={styles.feedCard}>
      <div className={styles.badgeAndKebab}>
        {answer === null ? <Badge className='inActive' text='미답변' /> : <Badge className='active' text='답변 완료' />}
        {showKebab && <DropdownKebab handleButtonClick={handleButtonClick} list={answer ? answerList : noAnswerList} />}
      </div>
      <Question createdAt={createdAt} content={content} />
      {answer && <AnswerMain editCheck={editCheck} questionId={id} answer={answer} />}
      <Reaction id={id} like={like} dislike={dislike} />
    </div>
  );
}
