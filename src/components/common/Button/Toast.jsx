import styles from './Toast.module.css';

export default function Toast({ pop }) {
  return (
    <div className={styles.toast}>
      <p className={styles.message}>{pop}</p>
    </div>
  );
}
