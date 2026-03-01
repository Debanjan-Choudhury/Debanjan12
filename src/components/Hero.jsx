/**
 * Hero.jsx
 * Full-viewport hero section.
 * — Left column : name, tagline, CTA buttons, stats
 * — Right column: photo card with floating info cards + HiCircle badge
 * — Background  : three animated gradient orbs
 * — Bottom      : scroll indicator
 *
 * TODO: Replace the photo placeholder (see comment inside .photo-main)
 */

import { PERSONAL, HERO_STATS } from '../data/portfolioData';
import HiCircle from './HiCircle';
import '../styles/Hero.css';

// Arrow icon used in the primary CTA button
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Play icon inside video card thumbnails
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M4 2L14 8L4 14V2Z" fill="#d4a853"/>
  </svg>
);

// Generic person icon shown while no real photo is set
const PersonIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);

const Hero = () => (
  <section className="hero" id="home">
    {/* ── Animated orb backgrounds ── */}
    <div className="orb orb-1" />
    <div className="orb orb-2" />
    <div className="orb orb-3" />

    {/* ══════════════════════════════════
        LEFT COLUMN — text content
    ══════════════════════════════════ */}
    <div className="hero-left">

      {/* Availability badge */}
      {PERSONAL.available && (
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for work
        </div>
      )}

      {/* Name — TODO: update in portfolioData.js */}
      <h1 className="hero-name">
        {PERSONAL.firstName}<br />
        <span className="gold">{PERSONAL.lastName}</span>
      </h1>

      {/* Tagline — TODO: update in portfolioData.js */}
      <p className="hero-tagline">{PERSONAL.tagline}</p>

      {/* CTA buttons */}
      <div className="hero-actions">
        <a href="#portfolio" className="btn-fill">
          View Portfolio <ArrowIcon />
        </a>
        <a href="#contact" className="btn-outline">Let's Talk</a>
      </div>

      {/* Stats — TODO: update numbers in portfolioData.js */}
      <div className="hero-stats">
        {HERO_STATS.map(({ num, label }) => (
          <div className="hs-item" key={label}>
            <div className="hs-num">{num}</div>
            <div className="hs-label">{label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* ══════════════════════════════════
        RIGHT COLUMN — photo card
    ══════════════════════════════════ */}
    <div className="hero-right">
      <div className="photo-card">

        {/* ── Photo ──────────────────────────────────────────
            TODO: Replace the placeholder below with your image.
            1. Copy your photo to /public/images/hero-photo.jpg
            2. Replace the <div className="photo-main"> block with:

            <div className="photo-main">
              <img
                src="/images/hero-photo.jpg"
                alt="Debanjan Choudhury"
                style={{ width:'100%', height:'100%', objectFit:'cover',
                         position:'absolute', inset:0, borderRadius:'20px' }}
              />
            </div>
        ─────────────────────────────────────────────────── */}
        <div className="photo-main">
          <div className="photo-placeholder-icon">
            <PersonIcon />
          </div>
          <span style={{ fontSize:'0.65rem', letterSpacing:'0.12em', color:'var(--muted)', textAlign:'center' }}>
            YOUR PHOTO<br />GOES HERE
          </span>
        </div>

        {/* ── Floating info cards ── */}
        <div className="float-card float-card-1">
          {/* TODO: update "Speciality" value if needed */}
          <div className="fc-label">Speciality</div>
          <div className="fc-value">Cinematic</div>
          <div className="fc-sub">Video Editing</div>
        </div>

        <div className="float-card float-card-2">
          {/* TODO: update your primary tools */}
          <div className="fc-label">Top Tools</div>
          <div className="fc-value" style={{ fontSize:'0.95rem', lineHeight:1.5 }}>
            DaVinci Resolve<br />After Effects
          </div>
        </div>

        {/* ── Hi circle badge (bottom-right) ── */}
        <HiCircle />
      </div>
    </div>

    {/* ── Scroll indicator ── */}
    <div className="scroll-hint">
      <div className="scroll-mouse">
        <div className="scroll-wheel" />
      </div>
      <span>Scroll</span>
    </div>
  </section>
);

export default Hero;
