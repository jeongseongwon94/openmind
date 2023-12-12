import styles from './CardContent.module.css';

export default function CardContent({ questionCount }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.questionWrap}>
        <img className={styles.messagesIcon} src='/src/images/icons/messages.svg' alt='' />
        <span>받은 질문</span>
      </div>
      <span>{(questionCount = '9개')}</span>
    </div>
  );
}
