import { useState, useEffect } from 'react';
import Layout from '../../components/page-layout/QuestionPage/Layout/Layout';
import AnswerMain from '../../components/page-layout/QuestionPage/Main/AnswerMain';
import { useGetData } from '../../hooks/useGetData';

export default function AnswerPage() {
  //localStorage
  const localStorageId = localStorage.getItem('id');
  if (!localStorageId) localStorage.setItem('id', 1347);

  //api
  const { data: subjectIdData } = useGetData(`subjects/${localStorageId}/`);
  const { name: subjectName, imageSource: subjectImageSource, alt } = subjectIdData;

  const { data: answerData } = useGetData(`answers/${localStorageId}/`);
  const { content = 'test', isRejected, createdAt, placeholder } = answerData;

  const { data: questionData } = useGetData(`question/${localStorageId}/`);
  const { answer } = questionData;

  // textarea event
  const [textareaValue, setTextareaValue] = useState(content);
  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  // buttonClass chhange
  const [textareaClassName, setTextareaClassName] = useState('lightButton');
  useEffect(() => {
    setTextareaClassName('darkButton');
  }, [textareaClassName]);

  // delete event
  const handleButtonClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <Layout name={subjectName} imageSource={subjectImageSource} />
      {/* showAnswerForm 여부에 따라 answerForm, postForm */}
      <AnswerMain
        showAnswerForm=''
        name={subjectName}
        imageSource={subjectImageSource}
        alt={alt}
        content={content}
        isRejected={isRejected}
        createdAt={createdAt}
        placeholder={placeholder}
        answer={answer}
        textareaValue={textareaValue}
        handleTextareaChange={handleTextareaChange}
        textareaClassName={textareaClassName}
        handleButtonClick={handleButtonClick}
      />
    </>
  );
}
