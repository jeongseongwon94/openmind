import { useEffect } from 'react';
import styles from './Toast.module.css';

export default function Toast({ setToast, text, toastTime }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, toastTime);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return <p className={styles.toast}>{text}</p>;
}
