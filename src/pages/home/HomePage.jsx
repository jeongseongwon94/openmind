import styles from './HomePage.module.css';
import SnsBox from '../../components/common/Button/SnsBox';

export default function App() {
  return (
    <div className={styles.home}>
      home
      <SnsBox></SnsBox>
    </div>
  );
}
