import { useContext, useState } from 'react';
import AnswerMain from '../../page-layout/QuestionPage/Main/AnswerMain';
import Badge from '../../common/Badge/Badge';
import DropdownKebab from '../../common/DropdownKebab/DropdownKebab';
import Question from '../Question/Question';
import Reaction from '../../common/Reaction/Reaction';
import { DataChangeDetectionContext } from '../../../contexts/DataChangeDetectionContext';
import { axiosBaseURL } from '../../../apis/axiosBaseURL';

import styles from './FeedCard.module.css';
import { SubjectDataContext } from '../../../contexts/SubjectDataContext';

export default function FeedCard({ data }) {
  const { id, answer, createdAt, content, like, dislike } = data;
  const { id: subjectId } = useContext(SubjectDataContext);
  const isId = localStorage.getItem('id') == subjectId;

  const setDataChangeDetection = useContext(DataChangeDetectionContext);

  const noAnswerList = ['답변거절'];
  const answerList = ['수정하기', '삭제하기'];

  const [editCheck, setEditCheck] = useState(false);

  const handleButtonClick = async (e) => {
    if (e.target.innerText === '수정하기') {
      setEditCheck(true);
    }

    if (e.target.innerText === '삭제하기') {
      try {
        await axiosBaseURL.delete(`questions/${id}/`);
        setDataChangeDetection(true);
      } catch (error) {
        console.log(`handleButtonClick 삭제하기 Error : ${error}`);
      }
    }

    if (e.target.innerText === '답변거절') {
      try {
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
        setDataChangeDetection(true);
      } catch (error) {
        console.log(`handleButtonClick 답변거절 Error : ${error}`);
      }
    }
  };

  return (
    <div className={styles.feedCard}>
      <div className={styles.badgeAndKebab}>
        {answer === null ? <Badge className='inActive' text='미답변' /> : <Badge className='active' text='답변 완료' />}
        {isId && <DropdownKebab handleButtonClick={handleButtonClick} list={answer ? answerList : noAnswerList} />}
      </div>
      <Question createdAt={createdAt} content={content} />
      {isId && <AnswerMain editCheck={editCheck} questionId={id} answer={answer} setEditCheck={setEditCheck} />}
      <Reaction id={id} like={like} dislike={dislike} />
    </div>
  );
}
