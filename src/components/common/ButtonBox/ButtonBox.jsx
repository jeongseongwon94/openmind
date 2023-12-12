import styles from './ButtonBox.module.css';

export default function ButtonBox({ handleButtonClick, children, className }) {
  return (
    <div>
      <button className={styles[`${className}`]} onClick={handleButtonClick}>
        {children}
      </button>
    </div>
  );
}
