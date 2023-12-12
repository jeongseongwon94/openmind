import { pageArrayInit } from './util';

export default function Pagenation({ total, handleChangeValue }) {
  const pageArray = pageArrayInit(total);

  const onClick = (e) => {
    handleChangeValue(e.target.value);
  };
  const onEnter = (e) => {
    handleChangeValue(e.target.value);
  };

  return (
    <>
      {pageArray.map((page) => (
        <button key={page} onClick={onClick} onMouseEnter={onEnter} value={page}>
          {page}
        </button>
      ))}
    </>
  );
}
