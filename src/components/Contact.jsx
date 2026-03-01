/**
 * Contact.jsx
 * Contact section — social links list (left) + contact form (right).
 *
 * TODO: Update all social links + handles in portfolioData.js.
 * TODO: Connect the form to a real backend or Formspree.
 *       See: https://formspree.io for easy no-backend form handling.
 */

import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { SOCIALS } from '../data/portfolioData';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
/* ── Platform SVG icons ─────────────────────────────────────── */
const icons = {
  Instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  YouTube: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 8s-.3-2-1.2-2.8C19.7 4 18.4 4 17.8 3.9 15.6 3.8 12 3.8 12 3.8s-3.6 0-5.8.1C5.6 4 4.3 4 3.2 5.2 2.3 6 2 8 2 8S1.7 10.3 1.7 12.7v2.2c0 2.3.3 4.7.3 4.7s.3 2 1.2 2.8c1.1 1.2 2.6 1.1 3.3 1.2C8.5 23.7 12 23.8 12 23.8s3.6 0 5.8-.2c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.8 1.2-2.8s.3-2.3.3-4.7v-2.2C22.3 10.3 22 8 22 8z"/>
      <path d="M9.7 15.5V8.8l6.6 3.4-6.6 3.3z" fill="currentColor" stroke="none"/>
    </svg>
  ),
  Twitter: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  LinkedIn: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Email: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  ),
};

/* ── Contact form with controlled inputs ─────────────────────── */
const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  // TODO: Replace alert with real form submission logic.
  // Example with Formspree:
  //   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  //     method: 'POST',
  //     body: JSON.stringify(form),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await emailjs.send(
      'service_wdif2lq',
      'template_hc7zwyd',
      {
        name: form.name,
        email: form.email,
        project: form.project,
        message: form.message,
      },
      'T4IWOUzkAYSDU32wv'
    );

    console.log(result.text);
    alert('Message sent successfully!');
    setForm({ name: '', email: '', project: '', message: '' });

  } catch (error) {
    console.error(error);
    alert('Failed to send message. Try again.');
  }
};

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="fgroup">
          <label className="flabel" htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            className="finput"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="fgroup">
          <label className="flabel" htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            className="finput"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="fgroup">
        <label className="flabel" htmlFor="cf-project">Project Type</label>
        <input
          id="cf-project"
          name="project"
          className="finput"
          type="text"
          placeholder="e.g. Cinematic Edit, Motion Graphics…"
          value={form.project}
          onChange={handleChange}
        />
      </div>

      <div className="fgroup">
        <label className="flabel" htmlFor="cf-message">Message</label>
        <textarea 
          id="cf-message"
          name="message"
          className="ftextarea"
          placeholder="Tell me about your project…"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-btn">
        Send Message
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  );
};

/* ── Main component ──────────────────────────────────────────── */
const Contact = () => {
  const { ref: headRef,  isVisible: headVisible  } = useScrollReveal();
  const { ref: socRef,   isVisible: socVisible   } = useScrollReveal();
  const { ref: formRef,  isVisible: formVisible  } = useScrollReveal();

  return (
    <section className="contact-wrap section-wrap" id="contact">
      <div className="contact-grid">

        {/* ── Left — heading + social links ── */}
        <div>
          <div ref={headRef} className={`reveal ${headVisible ? 'on' : ''}`}>
            <div className="section-chip">Get In Touch</div>
            <h2 className="section-heading">Let's create<br />something great</h2>
            <p className="section-sub">
              Available for freelance projects, brand collaborations, and exciting creative work.
              Drop a message and I'll reply within 24 hours.
            </p>
          </div>

          {/* Social links — TODO: update in portfolioData.js */}
          <div ref={socRef} className={`social-list reveal d1 ${socVisible ? 'on' : ''}`}>
            {SOCIALS.map(({ platform, handle, href }) => (
              <a
                key={platform}
                className="social-item"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="si-left">
                  <div className="si-icon">{icons[platform]}</div>
                  {platform} — {handle}
                </div>
                <span className="si-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right — contact form ── */}
        <div ref={formRef} className={`contact-form-wrap reveal-r d2 ${formVisible ? 'on' : ''}`}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
