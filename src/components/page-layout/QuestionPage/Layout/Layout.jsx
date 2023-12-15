import { titleTextLogo, titleImageLogo } from './util';
import styles from './Layout.module.css';
import ShareBox from '../../../common/ShareBox/ShareBox';

// 프로필이미지, 프로필아이디 정보
export default function Layout() {
  return (
    <header>
      <div className={styles.headerBackground}></div>
      <div className={styles.headerWrap}>
        <img className={styles.titleTextLogo} src={titleTextLogo} alt='' />
        <img className={styles.titleImageLogo} src={titleImageLogo} alt='' />
        <span className={styles.userId}>아초는고양이</span>
        <ShareBox baseURL='http://127.0.0.1:5173' className={styles.test} />
      </div>
    </header>
  );
}
