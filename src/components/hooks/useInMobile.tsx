// Validating mobile display
// useInMobile hook
'use client';

import { useState ,useEffect } from 'react';

export const useInMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
        setIsMobile(window.innerWidth < breakpoint);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => {
        window.removeEventListener('resize', checkDevice);
    };
  }, [breakpoint]);
  return isMobile;
}