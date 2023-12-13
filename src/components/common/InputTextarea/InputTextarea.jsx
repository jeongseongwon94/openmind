import styles from './InputTextarea.module.css';

export default function InputTextArea(placeholder) {
  return <textarea className={styles.textarea} placeholder={placeholder} />;
}
