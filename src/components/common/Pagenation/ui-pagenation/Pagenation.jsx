import { pageArrayInit } from './util';
import styles from './Pagenation.module.css';

export default function Pagenation({ total, handleChangeValue }) {
  const pageArray = pageArrayInit(total);

  return (
    <>
      {pageArray.map((page) => (
        <button
          key={page}
          onClick={(e) => handleChangeValue(e.target.value)}
          onMouseEnter={(e) => handleChangeValue(e.target.value)}
          value={page}
          className={styles.pageNum}
        >
          {page}
        </button>
      ))}
    </>
  );
}
