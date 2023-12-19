import { axiosBaseURL } from '../../apis/axiosBaseURL';

// 현재 저장되어 있는 총 피드의 수(count)를 가져 옴
const getTotalUserCount = async () => {
  const response = await axiosBaseURL.get('subjects/');
  const count = response.data.count;
  return count;
};

// 현재 저장되어 있는 모든 유저 정보 배열을 가져 옴
const getTotalUserData = async () => {
  const count = await getTotalUserCount();
  const response = await axiosBaseURL.get(`subjects/?limit=${count}`);
  const data = response.data.results;
  return data;
};

export const isExistedName = async (userName) => {
  const totalUserArray = await getTotalUserData();

  return totalUserArray.some(({ name }) => name === userName);
};
