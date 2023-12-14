import styles from './AnswerTextArea.module.css';

export default function AnswerTextArea({ content, placeholder }) {
  return (
    <form>
      <textarea
        className={styles.textArea}
        name=''
        id=''
        cols='30'
        rows='10'
        placeholder={placeholder}
        // value={content}
      ></textarea>
      <button type='submit' className={styles.button}>
        답변 완료
      </button>
    </form>
  );
}
