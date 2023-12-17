import { axiosBaseURL } from '../apis/axiosBaseURL';

// 질문 삭제
export const useQuestionDelete = async (url) => {
  axiosBaseURL.delete(url);
};
