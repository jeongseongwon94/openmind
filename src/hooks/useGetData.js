import { useState, useEffect } from 'react';
import { axiosBaseURL } from '../apis/axiosBaseURL';

export const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getInfo = async () => {
    setLoading(true);

    try {
      const response = await axiosBaseURL.get(url);
      setData(response.data);
    } catch {
      console.error('에러가 발생했습니다!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return { data, loading };
};
