import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubjectDataContext } from '../../../contexts/SubjectDataContext';
import ShareBox from '../../common/ShareBox/ShareBox';
import headerLogo from '../../../images/logo2.png';
import headerImg3 from '../../../images/HeaderImg3.png';
import styles from './Header.module.css';

export default function Header() {
  const navigateToListPage = useNavigate();
  const { imageSource, name } = useContext(SubjectDataContext);
  const CurrentUrl = window.location.href;

  return (
    <div className={styles.header}>
      <img className={styles.headerImg} src={headerImg3} alt='페이지 상단부분 노란색 배경 풀사이즈' />
      <div className={styles.headerWrap}>
        <button className={styles.logoButton} onClick={() => navigateToListPage('/list')}>
          <img className={styles.headerLogo} src={headerLogo} alt='logo' />
        </button>
        <img className={styles.imageSource} src={imageSource} alt='profileImg' />
        <span className={styles.userId}>{name}</span>
        <ShareBox CurrentUrl={CurrentUrl} className={styles.test} />
      </div>
    </div>
  );
}
