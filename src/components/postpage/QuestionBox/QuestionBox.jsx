import { useGetData } from '../../../hooks/useGetData';
import FeedCard from '../FeedCard/FeedCard';
import messages from '../../../images/icons/messages.svg';
import styles from './QuestionBox.module.css';

export default function QuestionBox({ id }) {
  // axiosBaseURL.get('subjects/23/questions/?limit=5&offset=2');
  const url = `subjects/${id}/questions/`;
  const { data, loading } = useGetData(url);
  if (loading) {
    return [];
  }
  const { name, imageSource, count } = data;

  return (
    <div className={styles.questionBox}>
      <div className={styles.text}>
        <img className={styles.messagesIcon} src={messages} alt='messageIcon' />
        <span className={styles.messages}>{`${count}개의 질문이 있습니다`}</span>
      </div>
      <FeedCard showKebab={false} /> 이 부분을 map을 통해 리스트로 만들기
    </div>
  );
}
