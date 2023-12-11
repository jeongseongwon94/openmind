import { useState, useEffect } from 'react';
import styles from './ButtonFloating.module.css';

export default function ButtonFloating({ onClick, type }) {
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const changeButtonText =
        type === 'questionButton' ? (window.innerWidth <= 375 ? '질문 작성' : '질문 작성하기') : '삭제하기';

      setButtonText(changeButtonText);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <button className={`${styles[type]}`} onClick={onClick}>
      {buttonText}
    </button>
  );
}
