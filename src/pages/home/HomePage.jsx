import styles from './HomePage.module.css';
import ShareBox from '../../components/common/Button/ShareBox.jsx';

export default function App() {
  return (
    <div className={styles.home}>
      home
      <ShareBox></ShareBox>
    </div>
  );
}
