/**
 * HiCircle.jsx
 * Green circle on the bottom-right of the hero photo card.
 * Alternates between a 👋 waving hand and "Hi" text — Framer-style.
 *
 * Animation timing (ms):
 *   T_WAVE_HOLD — how long the 👋 is shown  (wave plays in first 1.1s)
 *   T_HI_HOLD   — how long "Hi" is shown
 */

import { useState, useEffect, useRef } from 'react';

// ── Timing constants ────────────────────────────────────────────
const T_WAVE_HOLD = 2400; // ms — total time the hand slot is visible
const T_HI_HOLD   = 1800; // ms — total time the "Hi" slot is visible

const HiCircle = () => {
  // 'hand' | 'hi'
  const [slot, setSlot]       = useState('hand');
  const [waving, setWaving]   = useState(true);
  const handRef               = useRef(null);

  useEffect(() => {
    let timer;

    if (slot === 'hand') {
      // Restart the wave CSS animation by removing + re-adding the class
      const el = handRef.current;
      if (el) {
        el.classList.remove('waving');
        void el.offsetWidth; // force reflow so animation restarts
        el.classList.add('waving');
        setWaving(true);
      }
      timer = setTimeout(() => setSlot('hi'), T_WAVE_HOLD);
    } else {
      setWaving(false);
      timer = setTimeout(() => setSlot('hand'), T_HI_HOLD);
    }

    return () => clearTimeout(timer);
  }, [slot]);

  return (
    <a className="hi-circle" href="#contact" title="Say hi!">
      {/* Slot 1 — waving hand */}
      <div className={`hi-inner ${slot === 'hand' ? 'visible' : 'hidden'}`}>
        <span
          ref={handRef}
          className={`hi-hand ${waving ? 'waving' : ''}`}
        >
          👋
        </span>
      </div>

      {/* Slot 2 — "Hi" text */}
      <div className={`hi-inner ${slot === 'hi' ? 'visible' : 'hidden'}`}>
        <span className="hi-word">Hi</span>
      </div>
    </a>
  );
};

export default HiCircle;
