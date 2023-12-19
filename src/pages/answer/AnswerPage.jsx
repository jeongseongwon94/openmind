import { useParams } from 'react-router-dom';
import { SubjectDataContext } from '../../contexts/SubjectDataContext';
import { useGetData } from '../../hooks/useGetData';
import MainSection from '../../components/postpage/MainSection/MainSection';
import Header from '../../components/page-layout/QuestionPage/Layout/Header';

export default function PostPage() {
  const { id } = useParams();
  const url = `subjects/${id}/`;
  const { data, loading } = useGetData(url);
  if (loading) {
    return [];
  }

  return (
    <div>
      <SubjectDataContext.Provider value={data}>
        <Header />
        <MainSection />
      </SubjectDataContext.Provider>
    </div>
  );
}
