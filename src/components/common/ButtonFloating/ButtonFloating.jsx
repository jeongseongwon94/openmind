import styles from './ButtonFloating.module.css';

export default function ButtonFloating({ handleButtonClick, text }) {
  return (
    <button className={styles.button} onClick={handleButtonClick}>
      {text}
    </button>
  );
}
