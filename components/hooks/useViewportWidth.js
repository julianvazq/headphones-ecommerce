import { useEffect, useState } from 'react';

const useViewportWidth = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (window) {
      setWidth(window.innerWidth);
    }

    // let timer = null;
    const handleResize = () => {
      // clearTimeout(timer);
      // timer = setTimeout(() => setWidth(window.innerWidth), 0);
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
};

export default useViewportWidth;
