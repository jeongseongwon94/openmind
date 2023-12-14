import styles from './AnswerLayout.module.css';

export default function AnswerLayout({ children, createdAt, name, imageSource, alt, answer }) {
  return (
    <div className={styles.wrap}>
      <img className={styles.profileImage} src={imageSource} alt={alt} />
      <div className={styles.answerWrap}>
        <div className={styles.nameWrap}>
          <span className={styles.name}>{name}</span>
          {answer && <span className={styles.createdAt}>{createdAt}</span>}
        </div>
        {children}
      </div>
    </div>
  );
}
