import styles from './ButtonBox.module.css';

export default function ButtonBox({ children, className }) {
  return <button className={`${styles.button} ${styles[`${className}`]}`}>{children}</button>;
}
