import { pageArrayInit, pageCalculator } from './util';
import styles from './Pagenation.module.css';

export default function Pagenation({ current, total, handleChangeValue, setPage }) {
  const FirstButton = '<<';
  const LastButton = '>>';
  const lt = '<';
  const gt = '>';
  const PAGE_ONE = 1;
  const pageValue = pageCalculator(current, total);
  const { PAGE_LAST, PAGE_FIRST, NEXT, PREV } = pageValue;
  const pageArray = pageArrayInit(PAGE_FIRST, PAGE_LAST);

  return (
    <>
      {current > PAGE_ONE && (
        <button className={styles.pageNum} onClick={() => setPage(PAGE_ONE)}>
          {FirstButton}
        </button>
      )}
      <button className={styles.pageNum} onClick={() => setPage(PREV)}>
        {lt}
      </button>
      {pageArray.map((page) => (
        <button
          key={page}
          onClick={() => handleChangeValue(page)}
          value={page}
          className={`${styles.pageNum} ${current === page ? styles.pageNumActive : ''}`}
        >
          {page}
        </button>
      ))}
      <button className={styles.pageNum} onClick={() => setPage(NEXT)}>
        {gt}
      </button>
      {PAGE_LAST < total && (
        <button className={styles.pageNum} onClick={() => setPage(total)}>
          {LastButton}
        </button>
      )}
    </>
  );
}
