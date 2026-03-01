/**
 * Navbar.jsx
 * Fixed navigation bar with scroll-based frosted glass effect
 * and a mobile full-screen hamburger menu.
 */

import { useState, useEffect } from 'react';
import { PERSONAL } from '../data/portfolioData';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  // ── Scroll listener — adds .scrolled class for frosted glass ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Prevent body scroll when mobile menu is open ──────────────
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">

        {/* ── Logo ── */}
        <a href="#home" className="nav-logo" aria-label="Back to top">
          {PERSONAL.logoText}<span>.</span>
        </a>

        {/* ── Desktop links (hidden on mobile via CSS) ── */}
        <ul className="nav-links" role="list">
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* Hire Me pill — last item, styled as a bordered CTA button */}
          {/* TODO: Update href if you want this to open a different link */}
          <li><a href="#contact" className="nav-cta">Hire Me</a></li>
        </ul>

        {/* ── Hamburger (shown on mobile only via CSS) ── */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {/* ── Full-screen mobile overlay ── */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <a href="#about"     onClick={closeMenu}>About</a>
        <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
        <a href="#contact"   onClick={closeMenu}>Contact</a>
        <a href="#contact"   onClick={closeMenu} className="hire-me">Hire Me →</a>
      </div>
    </>
  );
};

export default Navbar;
