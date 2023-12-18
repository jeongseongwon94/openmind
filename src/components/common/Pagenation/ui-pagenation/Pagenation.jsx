import { pageArrayInit } from './util';
import styles from './Pagenation.module.css';

export default function Pagenation({ current, total, handleChangeValue, setPage }) {
  const PAGE_LIMIT = 5;
  const FirstButton = 'First';
  const LastButton = 'Last';
  const lt = '<';
  const gt = '>';
  const pageGroup = Math.ceil(current / PAGE_LIMIT);
  const pageLast = pageGroup * PAGE_LIMIT > total ? total : pageGroup * PAGE_LIMIT;
  const pageFirst = (pageGroup - 1) * PAGE_LIMIT + 1 <= 0 ? 1 : (pageGroup - 1) * PAGE_LIMIT + 1;
  const NEXT = pageLast + 1;
  const PREV = pageFirst - 1;
  const PAGE_ONE = 1;

  const pageArray = pageArrayInit(pageFirst, pageLast);
  return (
    <>
      {PREV > 0 && (
        <button className={styles.pageNum} onClick={() => setPage(PAGE_ONE)}>
          {FirstButton}
        </button>
      )}
      {PREV > 0 && (
        <button className={styles.pageNum} onClick={() => setPage(PREV)}>
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
      {pageLast < total && (
        <button className={styles.pageNum} onClick={() => setPage(NEXT)}>
          {gt}
        </button>
      )}
      {pageLast < total && (
        <button className={styles.pageNum} onClick={() => setPage(total)}>
          {LastButton}
        </button>
      )}
    </>
  );
}
