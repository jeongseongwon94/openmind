const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;
const month = day * 31;
const year = month * 12;

export const getElapsedTime = (createdAt) => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime = now - createdAtDate;

  if (elapsedTime >= 2 * year) {
    return `${Math.floor(elapsedTime / month)}달 전`;
  } else if (elapsedTime >= year) {
    return `1년 전`;
  } else if (elapsedTime >= 2 * month) {
    return `${Math.floor(elapsedTime / month)}달 전`;
  } else if (elapsedTime >= month) {
    return `1달 전`;
  } else if (elapsedTime >= week) {
    return `${Math.floor(elapsedTime / week)}주 전`;
  } else if (elapsedTime >= 2 * day) {
    return `${Math.floor(elapsedTime / day)}일 전`;
  } else if (elapsedTime >= day) {
    return `1일 전`;
  } else if (elapsedTime >= 2 * hour) {
    return `${Math.floor(elapsedTime / hour)}시간 전`;
  } else if (elapsedTime >= hour) {
    return `1시간 전`;
  } else if (elapsedTime >= 2 * minute) {
    return `${Math.floor(elapsedTime / minute)}분 전`;
  } else {
    return `1분 전`;
  }
};
