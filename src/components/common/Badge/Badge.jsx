import styles from './Badge.module.css';

export default function Badge({ className, text }) {
  return <div className={`${styles.badge} ${styles[`${className}`]}`}>{text}</div>;
}
