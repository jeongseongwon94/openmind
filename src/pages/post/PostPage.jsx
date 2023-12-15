import { useParams } from 'react-router-dom';
import MainSection from '../../components/postpage/MainSection/MainSection';
import { axiosBaseURL } from '../../apis/axiosBaseURL';
import styles from './PostPage.module.css';

export default function PostPage() {
  const { id } = useParams();
  // const response = axiosBaseURL.get(`subjects/${id}`);
  const questionCount = 3;

  return (
    <div className={styles.postPage}>
      {/* <Header /> */}
      <MainSection questionCount={questionCount} />
    </div>
  );
}
