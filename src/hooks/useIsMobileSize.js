import { useState, useEffect } from 'react';

export const useIsMobileSize = () => {
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 375);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobileSize;
};
