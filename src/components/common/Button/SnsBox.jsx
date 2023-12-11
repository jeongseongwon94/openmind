import React from 'react';
import Link from '../../../images/linkBrown.png';
import Kakaotalk from '../../../images/kakaoYellow.svg';
import Facebook from '../../../images/facebookBlue.svg';
import styles from './SnsBox.module.css';

export default function SnsBox() {
  const snsList = SNSList.map(({ title, link, imageSrc, altMessage }) => (
    <li key={title}>
      <SNS link={link} imageSrc={imageSrc} altMessage={altMessage} />
    </li>
  ));

  return (
    <div className={styles.snsBox}>
      <ul className={styles.snsContainer}>{snsList}</ul>
    </div>
  );
}

function SNS({ link, imageSrc, altMessage }) {
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <img src={imageSrc} alt={altMessage} />
    </a>
  );
}

// SNSList의 Link는 추후 기능 구현 시 수정 필요

const SNSList = [
  {
    title: 'link',
    link: 'https://',
    imageSrc: Link,
    altMessage: '사용자의 질문 페이지 링크를 복사하는 아이콘',
  },
  {
    title: 'link',
    link: 'https://www.kakaocorp.com/page/',
    imageSrc: Kakaotalk,
    altMessage: '카카오톡 공유 페이지로 이동하는 카카오톡 아이콘',
  },
  {
    title: 'facebook',
    link: 'https://www.facebook.com/',
    imageSrc: Facebook,
    altMessage: '페이스북 공유 페이지로 이동하는 페이스북 아이콘',
  },
];
