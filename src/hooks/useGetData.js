import { useState, useEffect } from 'react';
import { axiosBaseURL } from '../../apis/axiosBaseURL';

export const useGetData = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getInfo = async () => {
    setData({});
    setLoading(true);

    try {
      const res = await axiosBaseURL.get(url);
      setData(res.data);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return { data, loading };
};
