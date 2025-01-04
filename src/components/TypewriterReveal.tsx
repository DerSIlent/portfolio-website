import React, { useEffect, useState } from 'react';

interface TypewriterRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export function TypewriterReveal({ children, delay = 0 }: TypewriterRevealProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}