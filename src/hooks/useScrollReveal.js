/**
 * useScrollReveal.js
 * Custom hook — attaches an IntersectionObserver to any element ref.
 * When the element enters the viewport the `isVisible` flag flips to true,
 * which components use to apply their reveal CSS class.
 */
import { useEffect, useRef, useState } from 'react';

/**
 * @param {Object} options
 * @param {number} [options.threshold=0.05]  - how much of element must be visible
 * @param {string} [options.rootMargin='0px'] - optional margin around root
 */
const useScrollReveal = ({ threshold = 0.05, rootMargin = '0px' } = {}) => {
  const ref       = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If element is already in the viewport on mount, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once only
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

export default useScrollReveal;
