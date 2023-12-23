function pageCalculator(current, total) {
  const PAGE_LIMIT = 5;
  const PAGE_GROUP = Math.ceil(current / PAGE_LIMIT);
  const LAST = PAGE_GROUP * PAGE_LIMIT > total ? total : PAGE_GROUP * PAGE_LIMIT;
  const FIRST = (PAGE_GROUP - 1) * PAGE_LIMIT + 1 <= 0 ? 1 : (PAGE_GROUP - 1) * PAGE_LIMIT + 1;
  const NEXT_PAGE = LAST + 1 > total ? total : LAST + 1;
  const PREV_PAGE = FIRST - 1 < 1 ? 1 : FIRST - 1;

  const Page = {
    PAGE_LAST: LAST,
    PAGE_FIRST: FIRST,
    NEXT: NEXT_PAGE,
    PREV: PREV_PAGE,
  };
  return Page;
}

function pageArrayInit(Page_First, Page_Last) {
  const array = [];
  for (let i = Page_First; i <= Page_Last; i++) {
    array.push(i);
  }

  return array;
}

export { pageArrayInit, pageCalculator };
