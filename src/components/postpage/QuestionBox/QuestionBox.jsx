import { axiosBaseURL } from '../../apis/axiosBaseURL';
import messages from '../../../images/icons/messages.svg';
import styles from './QuestionBox.module.css';

export default function QuestionBox() {
  const questionCount = 3;
  // const res = axiosBaseURL.get('subjects/23/questions/?limit=5&offset=2');
  return (
    <div className={styles.questionBox}>
      <div className={styles.text}>
        <img className={styles.messagesIcon} src={messages} alt='messageIcon' />
        <span className={styles.messages}>{`${questionCount}개의 질문이 있습니다`}</span>
      </div>
      {/* <FeedCard />  이 부분을 map을 통해 리스트로 만들기 */}
    </div>
  );
}
