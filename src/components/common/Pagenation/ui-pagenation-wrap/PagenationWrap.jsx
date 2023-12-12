export default function PagenationWrap({ children, start, end, handleOnClick, handleOnEnter }) {
  const onClick = (e) => {
    handleOnClick(e.target.value);
  };
  const onEnter = (e) => {
    handleOnEnter(e.target.value);
  };

  return (
    <>
      <button onClick={onClick} onMouseEnter={onEnter} value={start}>
        {start}
      </button>
      {children}
      <button onClick={onClick} onMouseEnter={onEnter} value={end}>
        {end}
      </button>
    </>
  );
}
