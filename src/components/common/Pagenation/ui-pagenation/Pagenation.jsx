import { pageArrayInit } from './util';
import styles from './Pagenation.module.css';

export default function Pagenation({ current, total, handleChangeValue, setPage }) {
  const PAGE_LIMIT = 5;
  const FirstButton = '<<';
  const LastButton = '>>';
  const lt = '<';
  const gt = '>';
  const PAGE_GROUP = Math.ceil(current / PAGE_LIMIT);
  const PAGE_LAST = PAGE_GROUP * PAGE_LIMIT > total ? total : PAGE_GROUP * PAGE_LIMIT;
  const PAGE_FIRST = (PAGE_GROUP - 1) * PAGE_LIMIT + 1 <= 0 ? 1 : (PAGE_GROUP - 1) * PAGE_LIMIT + 1;
  const NEXT = PAGE_LAST + 1 > total ? total : PAGE_LAST + 1;
  const PREV = PAGE_FIRST - 1 < 1 ? 1 : PAGE_FIRST - 1;
  const PAGE_ONE = 1;
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
