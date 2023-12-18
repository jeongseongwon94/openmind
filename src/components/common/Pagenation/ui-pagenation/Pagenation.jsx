import { pageArrayInit } from './util';
import styles from './Pagenation.module.css';

export default function Pagenation({ current, total, handleChangeValue, setPage }) {
  const pageLimit = 5;
  const lt = '<';
  const gt = '>';
  const PageGroup = Math.ceil(current / pageLimit);
  const PageLast = PageGroup * pageLimit > total ? total : PageGroup * pageLimit;
  const PageFirst = (PageGroup - 1) * pageLimit + 1 <= 0 ? 1 : (PageGroup - 1) * pageLimit + 1;
  const next = PageLast + 1;
  const prev = PageFirst - 1;

  const pageArray = pageArrayInit(PageFirst, PageLast);
  return (
    <>
      {prev > 0 && (
        <button className={styles.pageNum} onClick={() => setPage(prev)}>
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
      {PageLast < total && (
        <button className={styles.pageNum} onClick={() => setPage(next)}>
          {gt}
        </button>
      )}
    </>
  );
}
