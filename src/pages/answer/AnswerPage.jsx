import { useEffect, useState } from 'react';
import { axiosBaseURL } from '../../apis/axiosBaseURL';
import Layout from '../../components/page-layout/QuestionPage/Layout/Layout';
import AnswerMain from '../../components/page-layout/QuestionPage/Main/AnswerMain';

export default function AnswerPage() {
  // 테스트 로컬스토리지
  const localStorageId = localStorage.getItem('id');
  if (!localStorageId) localStorage.setItem('id', 1347);

  const [subjectIdData, setSubjectsIdData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosBaseURL.get(`subjects/${localStorageId}/`);
      setSubjectsIdData(data);
    };
    fetchData();
  }, [localStorageId]);

  return (
    <>
      <Layout name={subjectIdData?.name} imageSource={subjectIdData?.imageSource} />
      <AnswerMain />
    </>
  );
}
