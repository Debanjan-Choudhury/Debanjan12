/**
 * Portfolio.jsx
 * ─────────────────────────────────────────────────────────────────
 * Features:
 *  • Real YouTube thumbnails fetched directly from YouTube's CDN
 *    (no API key needed — works for public + unlisted videos)
 *  • Clicking a card opens an in-page modal with the embedded player
 *  • Supports both regular videos and Shorts
 *  • Modal closes on: backdrop click | Escape key | close button
 *  • Body scroll locked while modal is open
 *
 * TODO: Replace placeholder IDs in src/data/portfolioData.js
 * ─────────────────────────────────────────────────────────────────
 */

import { useState, useEffect, useCallback } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import '../styles/Portfolio.css';

// ─────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────

/**
 * Returns the best YouTube thumbnail URL.
 * Tries maxresdefault (1280px) first; falls back to hqdefault (480px)
 * via the onError handler in YTThumbnail.
 * Works for regular videos AND Shorts — same CDN.
 */
const thumbUrl = (id, quality = 'maxresdefault') =>
  `https://img.youtube.com/vi/${id}/${quality}.jpg`;

/**
 * Builds the embed URL.
 * autoplay=1        → plays immediately when modal opens
 * rel=0             → suppresses unrelated suggestions at end
 * modestbranding=1  → reduces YouTube branding
 */
const embedUrl = (id) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;

// ─────────────────────────────────────────────────────────────────
// YTThumbnail — real image from YouTube CDN with quality fallback
// ─────────────────────────────────────────────────────────────────
const YTThumbnail = ({ id, title }) => (
  <img
    src={thumbUrl(id, 'maxresdefault')}
    alt={`Thumbnail for ${title}`}
    onError={(e) => { e.target.src = thumbUrl(id, 'hqdefault'); }}
    className="vid-thumb-img"
    loading="lazy"
    decoding="async"
  />
);

// ─────────────────────────────────────────────────────────────────
// VideoCard — shows thumbnail + opens modal on click
// ─────────────────────────────────────────────────────────────────
const VideoCard = ({ id, url, title, meta, catLabel, onPlay }) => {
  // Show gradient placeholder if real ID hasn't been added yet
  const isPlaceholder = !id || id.startsWith('LINK_');

  return (
    <div
      className={`vid-card ${isPlaceholder ? 'vid-card--placeholder' : ''}`}
      onClick={() => !isPlaceholder && onPlay(id, url)}
      role="button"
      tabIndex={0}
      aria-label={`Play ${title}`}
      onKeyDown={(e) => e.key === 'Enter' && !isPlaceholder && onPlay(id, url)}
    >
      {/* ── Thumbnail ──────────────────────────────────── */}
      <div className="vid-thumb">

        {/* Real YouTube thumbnail */}
        {!isPlaceholder && <YTThumbnail id={id} title={title} />}

        {/* Fallback gradient when ID is still a placeholder */}
        {isPlaceholder && <div className="vid-thumb-placeholder" />}

        {/* Category chip */}
        <span className="thumb-cat">{catLabel}</span>

        {/* Play button */}
        <div className="play-ring">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 2L14 8L4 14V2Z" fill="#d4a853" />
          </svg>
        </div>

        {/* Gradient overlay so play ring is readable over bright thumbnails */}
        <div className="thumb-overlay" />
      </div>

      {/* ── Info ───────────────────────────────────────── */}
      <div className="vid-info">
        <div className="vid-title">{title}</div>
        <div className="vid-meta">{meta}</div>
        {isPlaceholder && (
          <span className="yt-hint">{'// Replace ' + id + ' in portfolioData.js'}</span>
        )}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────
// VideoModal — full-screen overlay with YouTube iframe
// ─────────────────────────────────────────────────────────────────
const VideoModal = ({ videoId, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    if (!videoId) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [videoId, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = videoId ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [videoId]);

  if (!videoId) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      {/* Stop click from bubbling through to backdrop */}
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>

        {/* Close button */}
        <button className="modal-close" onClick={onClose} aria-label="Close video">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Responsive 16:9 iframe wrapper */}
        <div className="modal-player">
          <iframe
            src={embedUrl(videoId)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────
// Portfolio — main section
// ─────────────────────────────────────────────────────────────────
const Portfolio = () => {
  const [activeId, setActiveId] = useState(PORTFOLIO_CATEGORIES[0].id);
  const [playing,  setPlaying ] = useState(null); // { id } or null

  const { ref: headRef, isVisible: headVisible } = useScrollReveal();
  const { ref: tabsRef, isVisible: tabsVisible  } = useScrollReveal();

  const closeModal = useCallback(() => setPlaying(null), []);
  const openModal  = useCallback((id, url) => setPlaying({ id, url }), []);

  return (
    <section className="portfolio-wrap section-wrap" id="portfolio">

      {/* Heading */}
      <div ref={headRef} className={`portfolio-header reveal ${headVisible ? 'on' : ''}`}>
        <div className="section-chip">Portfolio</div>
        <h2 className="section-heading">Selected Work</h2>
        <p className="section-sub" style={{ marginBottom: '2.5rem' }}>
          A collection of my best projects. Click any card to play inline.
        </p>
      </div>

      {/* Category tabs */}
      <div ref={tabsRef} className={`cat-tabs reveal d1 ${tabsVisible ? 'on' : ''}`}>
        {PORTFOLIO_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`cat-tab ${activeId === cat.id ? 'active' : ''}`}
            onClick={() => setActiveId(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Video grids */}
      {PORTFOLIO_CATEGORIES.map(cat => (
        <div key={cat.id} className={`vid-grid ${activeId === cat.id ? 'active' : ''}`}>
          {cat.videos.map(video => (
            <VideoCard
              key={video.id}
              id={video.id}
              url={video.url}
              title={video.title}
              meta={video.meta}
              catLabel={cat.label}
              onPlay={openModal}
            />
          ))}
        </div>
      ))}

      {/* Modal player */}
      <VideoModal videoId={playing?.id ?? null} onClose={closeModal} />

    </section>
  );
};

export default Portfolio;
