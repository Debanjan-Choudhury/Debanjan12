/**
 * Footer.jsx
 * Site footer — logo, copyright, quick navigation links.
 * TODO: Update year or make it dynamic with new Date().getFullYear()
 */

import { PERSONAL } from '../data/portfolioData';
import '../styles/Footer.css';

const Footer = () => (
  <footer>
    <div className="footer-logo">
      {PERSONAL.logoText}<span>.</span>
    </div>

    {/* TODO: Update your name in portfolioData.js */}
    <p>© {new Date().getFullYear()} {PERSONAL.firstName}. All rights reserved.</p>

    <nav className="footer-links">
      <a href="#home">Top</a>
      <a href="#about">About</a>
      <a href="#portfolio">Work</a>
      <a href="#contact">Contact</a>
    </nav>
  </footer>
);

export default Footer;
