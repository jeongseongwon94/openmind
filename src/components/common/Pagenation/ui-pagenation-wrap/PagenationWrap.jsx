import styles from './PagenationWrap.module.css';

export default function PagenationWrap({ children, start, end, handleOnClick, handleOnEnter }) {
  return (
    <>
      <button
        onClick={(e) => handleOnClick(e.target.value)}
        onMouseEnter={(e) => handleOnEnter(e.target.value)}
        value={start}
        className={styles.pageNumWrap}
      >
        {start}
      </button>

      {children}

      <button
        onClick={(e) => handleOnClick(e.target.value)}
        onMouseEnter={(e) => handleOnEnter(e.target.value)}
        value={end}
        className={styles.pageNumWrap}
      >
        {end}
      </button>
    </>
  );
}
