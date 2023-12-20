import { useContext } from 'react';
import { SubjectDataContext } from '../../../../contexts/SubjectDataContext';
import ShareBox from '../../../common/ShareBox/ShareBox';
import headerLogo from '../../../../images/logo2.png';
import headerImg2 from '../../../../images/HeaderImg2.png';
import styles from './Header.module.css';

export default function Header() {
  const { imageSource, name } = useContext(SubjectDataContext);

  return (
    <div className={styles.header}>
      <img className={styles.headerImg} src={headerImg2} alt='' />
      <div className={styles.headerWrap}>
        <img className={styles.headerLogo} src={headerLogo} alt='logo' />
        <img className={styles.imageSource} src={imageSource} alt='profileImg' />
        <span className={styles.userId}>{name}</span>
        <ShareBox baseURL='http://127.0.0.1:5173' className={styles.test} />
      </div>
    </div>
  );
}
