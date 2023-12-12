import styles from './ButtonBox.module.css';

export default function ButtonBox({ onClick, children, className }) {
  const CN = className;
  return (
    <div>
      <button className={`${styles[CN]}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
