export function pageArrayInit(total) {
  return Array.from({ length: total }, (_, index) => index + 1);
}
