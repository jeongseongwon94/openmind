import { useParams } from 'react-router-dom';
import { axiosBaseURL } from '../../apis/axiosBaseURL';
import styles from './PostPage.module.css';

export default function PostPage() {
  const { id } = useParams();
  const response = axiosBaseURL.get(`subjects/${id}`);
  const questionCount = 0;

  return (
    <div className={styles.postPage}>
      {/* <Header /> */}
      {/* <Main questionCount={questionCount} /> */}
    </div>
  );
}
