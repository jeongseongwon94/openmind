import LinkBox from './LinkBox.jsx';
import SnsBox from './SnsBox.jsx';
import styles from './ShareBox.module.css';

export default function ShareBox({ CurrentUrl }) {
  return (
    <div className={styles.shareBox}>
      <LinkBox URL={CurrentUrl} />
      <SnsBox URL={CurrentUrl} />
    </div>
  );
}
