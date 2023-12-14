import styles from './Answer.module.css';

export default function Answer({ content, isRejected }) {
  return <>{isRejected ? <p className={styles.accept}>{content}</p> : <p className={styles.reject}>답변 거절</p>}</>;
}
