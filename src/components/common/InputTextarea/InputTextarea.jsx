import styles from './InputTextarea.module.css';

export default function InputTextArea({ placeholder, value, handleTextareaChange }) {
  return (
    <textarea className={styles.textarea} placeholder={placeholder} value={value} onChange={handleTextareaChange} />
  );
}
