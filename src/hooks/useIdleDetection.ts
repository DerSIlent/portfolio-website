import { useState, useEffect } from 'react';

export function useIdleDetection(idleTime: number = 5000) {
  const [isIdle, setIsIdle] = useState(false);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let initialTimeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeoutId);
      setIsIdle(false);
      timeoutId = setTimeout(() => setIsIdle(true), idleTime);
    };

    // Show initially after idleTime
    initialTimeoutId = setTimeout(() => setIsIdle(true), idleTime);

    // Events that reset the idle timer
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, resetTimer);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimer);
      });
      clearTimeout(timeoutId);
      clearTimeout(initialTimeoutId);
    };
  }, [idleTime]);

  return isIdle;
}