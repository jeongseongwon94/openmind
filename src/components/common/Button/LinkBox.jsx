import linkIcon from '../../../images/linkBrown.svg';
import styles from './LinkBox.module.css';

export default function LinkBox() {
  return (
    <div className={styles.linkContainer}>
      <img src={linkIcon} alt="링크를 복사하는 아이콘" />
    </div>
  );
}
