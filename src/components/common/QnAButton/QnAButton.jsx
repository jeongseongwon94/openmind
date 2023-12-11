import styles from './QnAButton.module.css';

export default function QnAButton({ onClick, children, className }) {
  const CN = className;
  return (
    <div>
      <button className={`${styles[CN]}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
