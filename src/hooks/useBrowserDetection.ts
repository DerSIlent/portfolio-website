import { useEffect, useState } from 'react';

export function useBrowserDetection() {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafariCheck = /^((?!chrome|android).)*safari/i.test(userAgent);
    setIsSafari(isSafariCheck);
  }, []);

  return { isSafari };
}