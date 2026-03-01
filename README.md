# Debanjan Choudhury — Portfolio

> Built with React 18 + Vite. All content is in one config file.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server  →  http://localhost:5173
npm run dev

# 3. Production build  →  /dist folder
npm run build
```

---

## Project Structure

```
src/
├── main.jsx                  # React entry point
├── App.jsx                   # Root component — assembles all sections
│
├── data/
│   └── portfolioData.js      # ★ ALL your content lives here — edit this first
│
├── hooks/
│   ├── useScrollReveal.js    # IntersectionObserver for scroll animations
│   └── useCursor.js          # Custom cursor dot + trail ring
│
├── components/
│   ├── Cursor.jsx            # Gold dot cursor + lag trail
│   ├── Navbar.jsx            # Fixed nav + mobile hamburger menu
│   ├── Hero.jsx              # Full-viewport hero section
│   ├── HiCircle.jsx          # Green badge on photo card (👋 ↔ Hi)
│   ├── About.jsx             # About section: photo + bio + tools
│   ├── Portfolio.jsx         # Category tabs + video card grid
│   ├── Contact.jsx           # Social links + contact form
│   └── Footer.jsx            # Footer with quick links
│
└── styles/
    ├── global.css            # Design tokens (CSS vars), reset, shared classes
    ├── Navbar.css
    ├── Hero.css
    ├── About.css
    ├── Portfolio.css
    ├── Contact.css
    └── Footer.css
```

---

## Customisation Checklist

### 1. Personal Info — `src/data/portfolioData.js`
- [ ] Update `PERSONAL.firstName`, `lastName`, `tagline`
- [ ] Update `HERO_STATS` numbers
- [ ] Update `ABOUT.bio`, `ABOUT.tools`, `ABOUT.stats`
- [ ] Replace all `LINK_X` placeholders in `PORTFOLIO_CATEGORIES` with real YouTube video IDs
- [ ] Update all `SOCIALS` handles and `href` links

### 2. Photos
- [ ] Add `hero-photo.jpg` → `public/images/hero-photo.jpg`  
  Then in `Hero.jsx` replace the placeholder block with:
  ```jsx
  <img src="/images/hero-photo.jpg" alt="Debanjan" style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0,borderRadius:'20px'}} />
  ```
- [ ] Add `about-photo.jpg` → `public/images/about-photo.jpg`  
  Then in `About.jsx` replace the placeholder block similarly.

### 3. Contact Form
- The form currently shows an `alert()`. To activate it, use [Formspree](https://formspree.io):
  1. Create a free account at formspree.io
  2. Create a form and copy your form ID (e.g. `xpzgkwbn`)
  3. In `Contact.jsx`, replace the `handleSubmit` function body with:
     ```js
     const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: JSON.stringify(form),
       headers: { 'Content-Type': 'application/json' },
     });
     ```

### 4. Colours
- All colours are CSS variables in `src/styles/global.css` under `:root`
- Change `--gold: #d4a853` to your preferred accent colour

---

## Tech Stack
- **React 18** — UI components
- **Vite 4** — dev server + build tool
- **Plain CSS Modules** — no Tailwind, no styled-components (keeps it portable)
- **Google Fonts** — Bricolage Grotesque + Outfit + JetBrains Mono
