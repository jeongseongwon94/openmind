import Layout from '../../components/page-layout/QuestionPage/Layout/Layout';
import AnswerMain from '../../components/page-layout/QuestionPage/Main/AnswerMain';
import { useGetData } from '../../hooks/useGetData';
import { SubjectDataContext } from '../../contexts/SubjectDataContext';

export default function AnswerPage() {
  const localStorageId = localStorage.getItem('id');
  if (!localStorageId) localStorage.setItem('id', 1452);

  const { data: subjectIdData } = useGetData(`subjects/${localStorageId}/`);

  const { data: questionData } = useGetData(`subjects/${localStorageId}/questions/`);
  const { results: questionResult } = questionData;

  const { data: answerData } = useGetData(`answers/1642/`);

  const data = {
    subjectIdData,
    questionResult,
    answerData,
  };

  return (
    <>
      <SubjectDataContext.Provider value={data}>
        <Layout />
        <AnswerMain />
      </SubjectDataContext.Provider>
    </>
  );
}
