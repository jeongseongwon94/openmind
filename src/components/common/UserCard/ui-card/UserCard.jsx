import styles from './UserCard.module.css';

export default function UserCard({
  name = '아초는고양이',
  imageSource = '/src/images/profile.svg',
  questionCount = '9개',
  messagesIcon = '/src/images/icons/messages.svg',
}) {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.profileWrap}>
        <img className={styles.profileImage} src={imageSource} alt='' />
        <span className={styles.profileText}>{name}</span>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.questionWrap}>
          <img className={styles.messagesIcon} src={messagesIcon} alt='' />
          <span>받은 질문</span>
        </div>
        <span>{questionCount}</span>
      </div>
    </div>
  );
}
