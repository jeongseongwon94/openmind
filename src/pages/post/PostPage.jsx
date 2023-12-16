import { useParams } from 'react-router-dom';
import { useGetData } from '../../hooks/useGetData';
import MainSection from '../../components/postpage/MainSection/MainSection';
import styles from './PostPage.module.css';

export default function PostPage() {
  const { id } = useParams();
  const url = `subjects/${id}/`;
  const { data, loading } = useGetData(url);
  if (loading) {
    return [];
  }
  const { name, imageSource, questionCount } = data;

  return (
    <div className={styles.postPage}>
      {/* <Header name={name} imageSource={imageSource} /> */}
      <MainSection id={id} questionCount={questionCount} />
    </div>
  );
}
