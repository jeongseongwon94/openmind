import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ToastButton from '../Button/ToastButton.jsx';
import linkIcon from '../../../images/linkBrown.svg';
import styles from './LinkBox.module.css';

export default function LinkBox() {
  const location = useLocation();
  const [toast, setToast] = useState(false);
  const TOAST_TIME = 5000;

  const handleCopyClipBoard = async () => {
    await navigator.clipboard.writeText(`http://localhost:5173/${location.pathname}`);
    setToast(true);
  };

  return (
    <div className={styles.linkContainer}>
      <img onClick={handleCopyClipBoard} src={linkIcon} alt="링크를 복사하는 아이콘" />
      {toast && <ToastButton setToast={setToast} text="링크가 복사되었습니다." toastTime={TOAST_TIME} />}
    </div>
  );
}
