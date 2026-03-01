/**
 * About.jsx
 * About section — two-column layout (photo left, bio + tools right).
 * Uses useScrollReveal for scroll-triggered entrance animations.
 *
 * TODO: Replace the photo placeholder (see comment inside .about-img)
 */

import useScrollReveal from '../hooks/useScrollReveal';
import { ABOUT } from '../data/portfolioData';
import '../styles/About.css';

// Generic person icon shown while no real photo is set
const PersonIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);

const About = () => {
  const { ref: leftRef,  isVisible: leftVisible  } = useScrollReveal();
  const { ref: bioRef,   isVisible: bioVisible   } = useScrollReveal();
  const { ref: toolsRef, isVisible: toolsVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();

  return (
    <section className="about-wrap section-wrap" id="about">
      <div className="about-grid">

        {/* ── Left column — photo ──────────────────────────── */}
        <div ref={leftRef} className={`reveal-l ${leftVisible ? 'on' : ''}`}>
          <div className="about-img">
            {/* ── TODO: Replace with your real photo ──────────
                1. Copy photo to /public/images/about-photo.jpg
                2. Replace the placeholder below with:

                <img
                  src="/images/about-photo.jpg"
                  alt="Debanjan"
                  style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'20px' }}
                />
            ──────────────────────────────────────────────── */}
            <PersonIcon />
            <span style={{ fontSize:'0.62rem', letterSpacing:'0.12em', color:'var(--muted)' }}>
              YOUR PHOTO HERE
            </span>
          </div>
        </div>

        {/* ── Right column — bio, tools, stats ─────────────── */}
        <div>
          {/* Bio */}
          <div ref={bioRef} className={`reveal ${bioVisible ? 'on' : ''}`}>
            <div className="section-chip">About Me</div>
            <h2 className="section-heading">Visual storyteller<br />by passion</h2>
            {/* TODO: Update bio text in portfolioData.js */}
            <p
              className="section-sub"
              dangerouslySetInnerHTML={{ __html: ABOUT.bio }}
            />
          </div>

          {/* Tools */}
          <div ref={toolsRef} className={`reveal d1 ${toolsVisible ? 'on' : ''}`}>
            <div className="tools-label">Tools I Use</div>
            <div className="tools-flex">
              {/* TODO: Edit tools array in portfolioData.js */}
              {ABOUT.tools.map(tool => (
                <span className="tool-pill" key={tool}>{tool}</span>
              ))}
            </div>
          </div>

          {/* Stats band */}
          <div ref={statsRef} className={`reveal d2 ${statsVisible ? 'on' : ''}`}>
            <div className="stats-band">
              {/* TODO: Update stat numbers in portfolioData.js */}
              {ABOUT.stats.map(({ num, label }) => (
                <div className="stat-cell" key={label}>
                  <div className="stat-n">{num}</div>
                  <div className="stat-l">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
