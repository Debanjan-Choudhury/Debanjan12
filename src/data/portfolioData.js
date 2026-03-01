/**
 * ============================================================
 * portfolioData.js  —  ALL editable content lives here.
 * As a freelancer you should only ever need to touch THIS file.
 * ============================================================
 */

// ── PERSONAL INFO ─────────────────────────────────────────────
export const PERSONAL = {
  firstName: 'Debanjan',          // TODO: your first name
  lastName:  'Choudhury',         // TODO: your last name
  logoText:  'deb',               // short brand mark shown in nav + footer
  title:     'Video Editor & Motion Artist',
  tagline:
    'Crafting cinematic stories, dynamic motion graphics, 3D product animations, and AI-generated visuals that captivate.',
  available: true,                // toggles the "Available for work" badge
};

// ── HERO STATS ─────────────────────────────────────────────────
export const HERO_STATS = [
  { num: '3+',  label: 'Years Exp.'    },  // TODO: update your numbers
  { num: '50+', label: 'Projects Done' },
  { num: '20+', label: 'Happy Clients' },
];

// ── ABOUT ──────────────────────────────────────────────────────
export const ABOUT = {
  bio: `I'm <strong>Debanjan</strong> — a video editor and motion artist with a deep
        love for transforming raw footage into cinematic experiences. I work at the
        intersection of technology and artistry to deliver visuals that resonate.`,

  // TODO: replace with your real photo path, e.g. '/images/about-photo.jpg'
  photo: null,

  tools: [
    'Adobe Premiere Pro',
    'After Effects',
    'DaVinci Resolve',
    'Blender',
    // 'Cinema 4D',
    'Meta Ai',
    // 'Midjourney',
    'Audacity',
    'Photoshop',
  ],

  stats: [
    { num: '3+',  label: 'Years Experience'   },  // TODO: update numbers
    { num: '50+', label: 'Projects Completed' },
    { num: '20+', label: 'Clients Served'     },
  ],
};

// ── PORTFOLIO VIDEOS ───────────────────────────────────────────
// Replace the `youtubeId` values with your real YouTube video IDs.
// The ID is the part after ?v= in a YouTube URL.
// Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ  →  id: 'dQw4w9WgXcQ'

export const PORTFOLIO_CATEGORIES = [
  {
    id:    'cin',
    label: 'Cinematic Video',
    thumbClass: 't-cin',
    videos: [
      {
        id:       '_AGyJc-88ao',              // TODO: replace with real YouTube video ID
        title:    'Golden Hour — Travel Film',
        meta:     '4K · Colour Graded · 3:42',
      },
      {
        id:       'SsV__wvIO8g',              // TODO: replace with real YouTube video ID
        title:    'Short Film — "Between Frames"',
        meta:     'Narrative · Colour Graded · 7:15',
      },
      {
        id:       'cSAwE67ab38',              // TODO: replace with real YouTube video ID
        title:    'Brand Documentary',
        meta:     'Commercial · 4K · 5:00',
      },
    ],
  },
  {
    id:    'mot',
    label: 'Motion Graphics',
    thumbClass: 't-mot',
    videos: [
      {
        id:       'LINK_4',              // TODO: replace with real YouTube video ID
        title:    'Logo Reveal Animation',
        meta:     'After Effects · 0:15',
      },
      {
        id:       'LINK_5',              // TODO: replace with real YouTube video ID
        title:    'Kinetic Typography Reel',
        meta:     'After Effects · 1:30',
      },
      {
        id:       'LINK_6',              // TODO: replace with real YouTube video ID
        title:    'Social Media Ad Pack',
        meta:     'Premiere + AE · 0:30',
      },
    ],
  },
  {
    id:    'pro',
    label: '3D Product Animation',
    thumbClass: 't-pro',
    videos: [
      {
        id:       'zEVyui39KtI',              // TODO: replace with real YouTube video ID
        title:    'Water Bottle product animation',
        meta:     'Blender + 4k · 0:16',
      },
      {
        id:       's2X6yV8gPcY',              // TODO: replace with real YouTube video ID
        title:    'Watch Product Showcase',
        meta:     'Blender · 4K · 0:16',
      },
      {
        id:       'Swl7FQjJTiI',              // TODO: replace with real YouTube video ID
        title:    'Headphone animation',
        meta:     'Blender · 4K · 0:10',
      },
    ],
  },
  {
    id:    'ai',
    label: 'AI Generated',
    thumbClass: 't-ai',
    videos: [
      {
        id:       'LINK_10',             // TODO: replace with real YouTube video ID
        title:    'AI Dreamscape — Sora + Runway',
        meta:     'AI Generated · 1:00',
      },
      {
        id:       'LINK_11',             // TODO: replace with real YouTube video ID
        title:    'AI Fashion Film',
        meta:     'Midjourney + Runway · 0:45',
      },
      {
        id:       'LINK_12',             // TODO: replace with real YouTube video ID
        title:    'Sci-Fi World Building',
        meta:     'Sora + Premiere · 1:30',
      },
    ],
  },
];

// ── CONTACT / SOCIALS ──────────────────────────────────────────
export const SOCIALS = [
  {
    platform: 'Instagram',
    handle:   '@debanjan925',            // TODO: your Instagram handle
    href:     'https://www.instagram.com/debanjan925/',
  },
  {
    platform: 'YouTube',
    handle:   '@idiobyte3934',           // TODO: your YouTube channel
    href:     'https://www.youtube.com/@idiobyte3934',
  },
  {
    platform: 'Twitter',
    handle:   '@debanjan925',            // TODO: your Twitter/X handle
    href:     'https://www.instagram.com/debanjan925/',
  },
  {
    platform: 'LinkedIn',
    handle:   'debanjan-choudhury',            // TODO: your LinkedIn name
    href:     'https://www.linkedin.com/in/debanjan-choudhury-0753a0210/',
  },
  {
    platform: 'Email',
    handle:   'debanjanchoudhury12@gmail.com',     // TODO: your real email
    href:     'mailto:debanjanchoudhury12@gmail.com',
  },
];
