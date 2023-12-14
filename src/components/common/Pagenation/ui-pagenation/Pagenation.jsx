import { pageArrayInit } from './util';
import styles from './Pagenation.module.css';

export default function Pagenation({ current, total, handleChangeValue }) {
  const pageArray = pageArrayInit(total);

  return (
    <>
      {pageArray.map((page) => (
        <button
          key={page}
          onClick={(e) => handleChangeValue(page)}
          value={page}
          className={`${styles.pageNum} ${current === page ? styles.pageNumActive : ''}`}
        >
          {page}
        </button>
      ))}
    </>
  );
}
