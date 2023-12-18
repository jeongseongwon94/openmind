import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SubjectDataContext } from '../../../../contexts/SubjectDataContext';
import Answer from '../../../common/FeedCardAnswer/Answer.jsx';
import ButtonFloating from '../../../common/ButtonFloating/ButtonFloating';
import DropdownKebab from '../../../common/DropdownKebab/DropdownKebab';
import { axiosBaseURL } from '../../../../apis/axiosBaseURL.js';
import { useQuestionDelete } from '../../../../hooks/useQuestion.js';

import styles from './AnswerMain.module.css';

export default function AnswerMain({ answer }) {
  const { id } = useParams();

  console.log(`AnswerMain>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
  const { answerId, content, createdAt, questionId, isRejected } = answer || {};
  console.log(answer);

  // textarea 입력 값
  // const [textareaValue, setTextareaValue] = useState(answerData.content);
  const [textareaValue, setTextareaValue] = useState(content);
  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  // textarea 입력 시 버튼 클래스 변경
  const [textareaClassName, setTextareaClassName] = useState('lightButton');
  useEffect(() => {
    setTextareaClassName('darkButton');
  }, [textareaClassName]);

  // 전체 삭제 : list데이터 merge 이후 다시 확인
  const handleDeleteButton = async () => {
    useQuestionDelete(`questions/${localStorageId}/`);
  };

  // 답변하기 : list데이터 merge 이후 다시 확인
  const handleAnswerCreate = async () => {
    // const questionId = questionResult[0].id;
    console.log(id);
    // await axiosBaseURL.post(
    //   `questions/${questionId}/answers/`,
    //   {
    //     content: textareaValue,
    //     isRejected: false,
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
  };

  // Kebab 리스트
  const list = ['수정하기', '삭제하기', '답변거절'];

  return (
    <main>
      {/* <ButtonFloating handleButtonClick={handleDeleteButton} text='삭제하기' className={styles.deleteButton} /> */}
      {/* <DropdownKebab list={list} /> */}

      {/* showAnswerForm 사용여부에 따라 textareaForm 표시*/}
      <Answer
        showAnswerForm={true}
        answer={answer}
        textareaValue={textareaValue}
        textareaClassName={textareaClassName}
        handleTextareaChange={handleTextareaChange}
        handleDeleteButton={handleDeleteButton}
        handleAnswerCreate={handleAnswerCreate}
      />
    </main>
  );
}
