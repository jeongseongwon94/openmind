import { useParams } from 'react-router-dom';
import { SubjectDataContext } from '../../contexts/SubjectDataContext';
import { useGetData } from '../../hooks/useGetData';
import MainSection from '../../components/postpage/MainSection/MainSection';
import Header from '../../components/AnswerPage/Header/Header';
import styles from './AnswerPage.module.css';

export default function AnswerPage() {
  const { id } = useParams();
  const url = `subjects/${id}/`;
  const { data, loading } = useGetData(url);
  if (loading) {
    return [];
  }

  return (
    <SubjectDataContext.Provider value={data}>
      <div className={styles.answerPage}>
        <Header />
        <MainSection />
      </div>
    </SubjectDataContext.Provider>
  );
}
