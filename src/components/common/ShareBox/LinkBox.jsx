import { useEffect, useState } from 'react';
import Toast from './Toast.jsx';
import linkIcon from '../../../images/linkBrown.svg';
import styles from './LinkBox.module.css';

export default function LinkBox({ URL }) {
  const [toast, setToast] = useState(false);
  const TOAST_TIME = 5000;

  const handleCopyClipBoard = async () => {
    await navigator.clipboard.writeText(URL);
    setToast(true);
  };

  return (
    <div className={styles.linkIcon}>
      <img onClick={handleCopyClipBoard} src={linkIcon} alt="링크를 복사하는 아이콘" />
      {toast && <Toast setToast={setToast} text="링크가 복사되었습니다." toastTime={TOAST_TIME} />}
    </div>
  );
}
