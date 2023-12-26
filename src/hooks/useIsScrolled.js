import { useState, useEffect } from 'react';

export const useIsScrolled = () => {
  const [page, setPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight && hasMoreData) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasMoreData]);

  return { page, setPage, setHasMoreData };
};
