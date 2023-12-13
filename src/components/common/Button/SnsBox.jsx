import KakaotalkIcon from '../../../images/kakaoYellow.svg';
import FacebookIcon from '../../../images/facebookBlue.svg';
import styles from './SnsBox.module.css';

export default function SnsBox() {
  return (
    <div>
      <ul className={styles.snsContainer}>
        {SNSList.map(({ title, link, imageSrc, altMessage }) => (
          <li key={title}>
            <a href={link} target="_blank" rel="noreferrer noopener">
              <img src={imageSrc} alt={altMessage} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// SNSList의 Link는 추후 기능 구현 시 수정 필요

const SNSList = [
  {
    title: 'kakaotalk',
    link: 'https://www.kakaocorp.com/page/',
    imageSrc: KakaotalkIcon,
    altMessage: '카카오톡 공유 페이지로 이동하는 카카오톡 아이콘',
  },
  {
    title: 'facebook',
    link: 'https://www.facebook.com/',
    imageSrc: FacebookIcon,
    altMessage: '페이스북 공유 페이지로 이동하는 페이스북 아이콘',
  },
];
