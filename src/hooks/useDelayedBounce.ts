import { useState, useEffect } from 'react';

export function useDelayedBounce(delay: number = 10000) {
  const [shouldBounce, setShouldBounce] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const startBounceTimer = () => {
      timer = setTimeout(() => {
        setShouldBounce(true);
      }, delay);
    };

    if (!isAnimating) {
      startBounceTimer();
    }

    return () => clearTimeout(timer);
  }, [delay, isAnimating]);

  const onAnimationComplete = () => {
    setShouldBounce(false);
    setIsAnimating(false);
    // Immediately start the timer for the next bounce cycle
    setTimeout(() => {
      setShouldBounce(true);
    }, 10000);
  };

  return { shouldBounce, onAnimationComplete, setIsAnimating };
}