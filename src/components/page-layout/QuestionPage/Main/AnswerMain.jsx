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

export default function AnswerMain({ questionId, answer }) {
  console.log(`AnswerMain>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`);
  console.log(questionId);

  const { id: subjectId } = useContext(SubjectDataContext);

  const { answerId, content, createdAt, answerQuestionId, isRejected } = answer || {};
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

  // 전체 삭제 : api ?
  const handleDeleteButton = async () => {
    // api ?
  };

  // 답변하기 : 수정이후 삭제 된 리스트를 새로 보여주는 기능 추가 필요
  const handleAnswerCreate = async () => {
    // 커스텀 훅으로 사용하고싶으나 405error발생 : 수정필요
    // await useAnswerCreate(`questions/${questionId}/`,  );
    await axiosBaseURL.post(
      `questions/${questionId}/answers/`,
      {
        content: textareaValue,
        isRejected: false,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return (
    <>
      <main>
        <ButtonFloating handleButtonClick={handleDeleteButton} text='삭제하기' className={styles.deleteButton} />
        {/* showAnswerForm 사용여부에 따라 textareaForm 표시 */}
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
    </>
  );
}
