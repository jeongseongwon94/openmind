import { pageArrayInit } from './util';
import styles from './Pagenation.module.css';

export default function Pagenation({ current, total, handleChangeValue, setPage }) {
  const pageLimit = 5;
  const lt = '<';
  const gt = '>';
  const pageGroup = Math.ceil(current / pageLimit);
  const pageLast = pageGroup * pageLimit > total ? total : pageGroup * pageLimit;
  const pageFirst = (pageGroup - 1) * pageLimit + 1 <= 0 ? 1 : (pageGroup - 1) * pageLimit + 1;
  const next = pageLast + 1;
  const prev = pageFirst - 1;

  const pageArray = pageArrayInit(pageFirst, pageLast);
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
      {pageLast < total && (
        <button className={styles.pageNum} onClick={() => setPage(next)}>
          {gt}
        </button>
      )}
    </>
  );
}
