import { axiosBaseURL } from '../../apis/axiosBaseURL';

export const createUserData = async (user) => {
  const response = await axiosBaseURL.post(
    'subjects/',
    { name: user },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};
