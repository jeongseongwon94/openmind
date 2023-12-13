import { useEffect } from 'react';
import styles from './Toast.module.css';

export default function ToastButton({ setToast, text, toastTime }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, toastTime);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <div className={styles.toast}>
      <p className={styles.message}>{text}</p>
    </div>
  );
}
