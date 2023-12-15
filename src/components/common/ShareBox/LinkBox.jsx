import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Toast from './Toast.jsx';
import linkIcon from '../../../images/linkBrown.svg';

export default function LinkBox({ baseURL }) {
  const location = useLocation();
  const [toast, setToast] = useState(false);
  const TOAST_TIME = 5000;

  const handleCopyClipBoard = async () => {
    await navigator.clipboard.writeText(`${baseURL}${location.pathname}`);
    setToast(true);
  };

  return (
    <div>
      <img onClick={handleCopyClipBoard} src={linkIcon} alt='링크를 복사하는 아이콘' />
      {toast && <Toast setToast={setToast} text='링크가 복사되었습니다.' toastTime={TOAST_TIME} />}
    </div>
  );
}
