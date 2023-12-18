export function pageArrayInit(Page_First, Page_Last) {
  const array = [];
  for (let i = Page_First; i <= Page_Last; i++) {
    array.push(i);
  }

  return array;
}
