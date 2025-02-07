import { useCallback } from "react";

const UseSmoothScroll = () => {
  const scrollTo = useCallback((id, duration = 1000) => {
    const target = document.getElementById(id);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easeInOutQuad =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * easeInOutQuad);

      if (elapsedTime < duration) {
        requestAnimationFrame(animation); //works
      }
    }

    requestAnimationFrame(animation);
  }, []);

  return scrollTo;
};

export default UseSmoothScroll;
