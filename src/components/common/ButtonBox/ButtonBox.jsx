import styles from './ButtonBox.module.css';

export default function ButtonBox({ children, className, text = true, handleButtonClick }) {
  return (
    <button
      className={`${styles.button} ${styles[`${className}`]}`}
      disabled={text ? false : true}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
}
