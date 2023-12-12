import styles from './InputTextarea.module.css';

export default function InputTextArea() {
  return (
    <div>
      <textarea className={styles.textarea} placeholder='이름을 입력하세요' />
    </div>
  );
}
