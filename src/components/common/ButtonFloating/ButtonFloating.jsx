import styles from './ButtonFloating.module.css';

export default function ButtonFloating({ className, handleButtonClick, text }) {
  return (
    <button className={`${styles.button} ${className}`} onClick={handleButtonClick}>
      {text}
    </button>
  );
}
