/**
 * useCursor.js
 * Custom hook — drives the custom gold cursor dot + lagging trail ring.
 * Attaches to the two cursor DOM nodes via refs.
 * Auto-hides on touch devices.
 */
import { useEffect, useRef } from 'react';

const useCursor = () => {
  const curRef   = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cur   = curRef.current;
    const trail = trailRef.current;
    if (!cur || !trail) return;

    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      cur.style.display   = 'none';
      trail.style.display = 'none';
      document.body.style.cursor = 'auto';
      return;
    }

    let tx = 0, ty = 0, rx = 0, ry = 0;
    let rafId;

    const onMouseMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      cur.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
    };

    // Lerp the trail for a smooth lag effect
    const lerpLoop = () => {
      rx += (tx - rx) * 0.14;
      ry += (ty - ry) * 0.14;
      trail.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      rafId = requestAnimationFrame(lerpLoop);
    };

    document.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(lerpLoop);

    // Expand cursor on interactive elements
    const addExpand    = () => cur.classList.add('expand');
    const removeExpand = () => cur.classList.remove('expand');

    const targets = document.querySelectorAll('a, button, .vid-card, .tool-pill');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', addExpand);
      el.addEventListener('mouseleave', removeExpand);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', addExpand);
        el.removeEventListener('mouseleave', removeExpand);
      });
    };
  }, []);

  return { curRef, trailRef };
};

export default useCursor;
