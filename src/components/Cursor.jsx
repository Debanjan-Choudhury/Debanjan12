/**
 * Cursor.jsx
 * Custom gold cursor dot + lagging trail ring.
 * Auto-hides on touch/mobile devices.
 * Expands when hovering interactive elements.
 */

import useCursor from '../hooks/useCursor';

const Cursor = () => {
  const { curRef, trailRef } = useCursor();

  return (
    <>
      <div ref={curRef}   className="cursor-dot"   />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
};

export default Cursor;
