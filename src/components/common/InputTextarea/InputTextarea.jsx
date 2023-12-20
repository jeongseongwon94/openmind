import styles from './InputTextarea.module.css';

export default function InputTextArea({ placeholder, value, handleTextareaChange, className }) {
  return (
    <textarea
      className={`${styles.textarea} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={handleTextareaChange}
    />
  );
}
