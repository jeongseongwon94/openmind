import { pageArrayInit } from './util';
import styles from './Pagenation.module.css';

export default function Pagenation({ current, total, handleChangeValue, setPage }) {
  const pageArray = pageArrayInit(total);
  const PAGE_ONE = 1;
  const lt = '<';
  const gt = '>';

  return (
    <>
      {current > PAGE_ONE && (
        <button className={styles.pageNum} onClick={() => setPage(current - PAGE_ONE)}>
          {lt}
        </button>
      )}
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
      {current < pageArray.length && (
        <button className={styles.pageNum} onClick={() => setPage(current + PAGE_ONE)}>
          {gt}
        </button>
      )}
    </>
  );
}
