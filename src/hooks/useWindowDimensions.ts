import { useState, useEffect } from 'react';

function getWindowDimensions() {
  let width = 0,
    height = 0;

  if (global.window) {
    width = window.innerWidth;
    height = window.innerHeight;
  }
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
