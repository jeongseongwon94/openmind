import linkIcon from '../../../images/linkBrown.svg';
import styles from './Link.module.css';

export default function Link() {
  
  return (
    <div className={styles.linkContainer}>
      <img link={link} src={linkIcon} alt='링크를 복사하는 아이콘' />
    </div>;
  )
};
