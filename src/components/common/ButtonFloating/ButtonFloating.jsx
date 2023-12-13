import styles from './ButtonFloating.module.css';

export default function ButtonFloating({ handleButtonClick }) {
  return (
    <button className={styles.button} onClick={handleButtonClick}>
      질문 작성하기
    </button>
  );
}
