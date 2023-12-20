import styles from './UserCard.module.css';
import messagesIcon from '../../../../images/icons/messages.svg';
import { useNavigate } from 'react-router-dom';

export default function UserCard({ name, imageSource, questionCount, id }) {
  const navigateToFeed = useNavigate();

  return (
    <div className={styles.cardWrap} onClick={() => navigateToFeed(`/post/${id}`)}>
      <div className={styles.profileWrap}>
        <img className={styles.profileImage} src={imageSource} alt='' />
        <span className={styles.profileText}>{name}</span>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.questionWrap}>
          <img className={styles.messagesIcon} src={messagesIcon} alt='' />
          <span>받은 질문</span>
        </div>
        <span>{questionCount} 개</span>
      </div>
    </div>
  );
}
