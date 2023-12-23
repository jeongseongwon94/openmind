import { useEffect } from 'react';
import KakaotalkIcon from '../../../images/kakaoYellow.svg';
import FacebookIcon from '../../../images/facebookBlue.svg';
import styles from './SnsBox.module.css';

const { Kakao } = window;
export default function SnsBox({ URL }) {
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('ca3c82cf4a455694e5d40509eeb258ad');
  }, []);

  const handleShare = ({ title }) => {
    if (title === 'kakaotalk') {
      Kakao.Share.sendScrap({
        requestUrl: URL,
      });
    }

    if (title === 'facebook') {
      window.open(
        `http://www.facebook.com/sharer/sharer.php?u=${URL}`,
        '_blank',
        'width=480, height=700, top=190, left = 720, scrollbars=yes'
      );
    }
  };

  return (
    <ul className={styles.snsContainer}>
      {SNSList.map(({ title, imageSrc, altMessage }) => (
        <li key={title} onClick={() => handleShare({ title })}>
          <img src={imageSrc} alt={altMessage} />
        </li>
      ))}
    </ul>
  );
}

const SNSList = [
  {
    title: 'kakaotalk',
    imageSrc: KakaotalkIcon,
    altMessage: '카카오톡 공유 페이지로 이동하는 카카오톡 아이콘',
  },
  {
    title: 'facebook',
    imageSrc: FacebookIcon,
    altMessage: '페이스북 공유 페이지로 이동하는 페이스북 아이콘',
  },
];
