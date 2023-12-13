import LinkBox from './LinkBox.jsx';
import SnsBox from './SnsBox.jsx';
import styles from './ShareBox.module.css';

export default function shareBox() {
  return (
    <div className={styles.shareBox}>
      <div className={styles.shareBoxItem}>
        <LinkBox />
      </div>
      <div className={styles.shareBoxItem}>
        <SnsBox />
      </div>
    </div>
  );
}
