import { axiosBaseURL } from '../apis/axiosBaseURL';

// 답변 하기(405에러 발생 수정필요)
export const useAnswerCreate = async (url, textareaValue) => {
  await axiosBaseURL.post(
    url,
    {
      content: textareaValue,
      isRejected: false,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
// 답변 거절(405에러 발생 수정필요)
export const useCreateRejectedAnswer = async (url) => {
  await axiosBaseURL.post(
    url,
    {
      content: 'isRejected',
      isRejected: true,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};

// 해당 ID 질문 삭제
export const useQuestionDelete = async (url) => {
  axiosBaseURL.delete(url);
};
