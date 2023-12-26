import { useContext, useState } from 'react';
import Answer from './Answer.jsx';
import { axiosBaseURL } from '../../../apis/axiosBaseURL.js';
import { DataChangeDetectionContext } from '../../../contexts/DataChangeDetectionContext.js';

export default function AnswerMain({ editCheck, questionId, answer, setEditCheck }) {
  const setDataChangeDetection = useContext(DataChangeDetectionContext);

  const { id: answerId, content } = answer || {};

  const [textareaValue, setTextareaValue] = useState(content);
  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleAnswerCreate = async (e) => {
    e.preventDefault();

    try {
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
      setDataChangeDetection(true);
      setEditCheck(false);
    } catch (error) {
      console.log(`handleAnswerCreate Error : ${error}`);
    }
  };

  const handleAnswerEdit = async (e) => {
    e.preventDefault();

    try {
      await axiosBaseURL.put(
        `answers/${answerId}/`,
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
      setDataChangeDetection(true);
      setEditCheck(false);
    } catch (error) {
      console.log(`handleAnswerEdit Error : ${error}`);
    }
  };

  return (
    <>
      <Answer
        answer={answer}
        textareaValue={textareaValue}
        handleTextareaChange={handleTextareaChange}
        editCheck={editCheck}
        handleAnswerEdit={handleAnswerEdit}
        handleAnswerCreate={handleAnswerCreate}
      />
    </>
  );
}
