import { useState, useEffect } from 'react';

export const useIsTabletSize = () => {
  const [isTableteSize, setIsTabletSize] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletSize(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isTableteSize;
};
