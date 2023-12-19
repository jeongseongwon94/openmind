import Pagenation from '../ui-pagenation/Pagenation';
import styles from './CardPagenation.module.css';

export default function CardPagenation({ count, LIMIT, currentPage, setPage }) {
  const totalValue = Math.ceil(count / LIMIT);

  const handleChangeValue = async (newValue) => {
    setPage(newValue);
  };

  return (
    <div className={styles.buttonWrap}>
      <Pagenation current={currentPage} total={totalValue} handleChangeValue={handleChangeValue} setPage={setPage} />
    </div>
  );
}
