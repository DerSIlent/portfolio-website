import { useEffect } from 'react';

export function useScrollSnap() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let isScrolling = false;
    let currentSection = 0;
    let lastScrollTime = 0;
    let accumulatedDelta = 0;
    const SCROLL_THRESHOLD = 50; // Minimum scroll amount needed to trigger section change
    const SCROLL_COOLDOWN = 800; // Time in ms to wait between scroll events
    const DELTA_RESET_TIMEOUT = 300; // Time in ms to reset accumulated delta

    const scrollToSection = (index: number) => {
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        isScrolling = false;
      }, SCROLL_COOLDOWN);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Prevent default scroll

      const now = Date.now();
      if (isScrolling || now - lastScrollTime < SCROLL_COOLDOWN) {
        return;
      }

      // Accumulate scroll delta
      accumulatedDelta += Math.abs(e.deltaY);

      // Reset accumulated delta after timeout
      setTimeout(() => {
        accumulatedDelta = 0;
      }, DELTA_RESET_TIMEOUT);

      // Only scroll if threshold is met
      if (accumulatedDelta > SCROLL_THRESHOLD) {
        if (e.deltaY > 0 && currentSection < sections.length - 1) {
          currentSection++;
          scrollToSection(currentSection);
        } else if (e.deltaY < 0 && currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
        lastScrollTime = now;
        accumulatedDelta = 0;
      }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const now = Date.now();
      if (isScrolling || now - lastScrollTime < SCROLL_COOLDOWN) {
        return;
      }

      if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
        e.preventDefault();
        currentSection++;
        scrollToSection(currentSection);
        lastScrollTime = now;
      } else if (e.key === 'ArrowUp' && currentSection > 0) {
        e.preventDefault();
        currentSection--;
        scrollToSection(currentSection);
        lastScrollTime = now;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}