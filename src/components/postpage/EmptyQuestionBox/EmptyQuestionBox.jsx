import messages from '../../../images/icons/messages.svg';
import empty from '../../../images/empty.svg';
import styles from './EmptyQuestionBox.module.css';

export default function EmptyQuestionBox() {
  return (
    <div className={styles.questionBox}>
      <div className={styles.text}>
        <img className={styles.messagesIcon} src={messages} alt='messageIcon' />
        <span className={styles.messages}>아직 질문이 없습니다</span>
      </div>
      <img className={styles.emptyIcon} src={empty} alt='questionBoxIcon' />
    </div>
  );
}
