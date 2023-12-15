import ShareBox from '../../../common/ShareBox/ShareBox';
import { answerHeaderLogo } from './util';
import styles from './Layout.module.css';

export default function Layout({ name, imageSource }) {
  return (
    <header>
      <div className={styles.headerBackground}></div>
      <div className={styles.headerWrap}>
        <img className={styles.answerHeaderLogo} src={answerHeaderLogo} alt='' />
        <img className={styles.imageSource} src={imageSource} alt='' />
        <span className={styles.userId}>{name}</span>
        <ShareBox baseURL='http://127.0.0.1:5173' className={styles.test} />
      </div>
    </header>
  );
}
