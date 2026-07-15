import React, { useState, useRef, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from '@emailjs/browser';
import './Contact.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'demo-service';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'demo-template';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'demo-public';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/joshika',
    icon: <GitHubIcon sx={{ fontSize: 18 }} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/joshika',
    icon: <LinkedInIcon sx={{ fontSize: 18 }} />,
  },
];

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' };

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!fields.subject.trim()) errors.subject = 'Subject is required.';
  if (!fields.message.trim()) errors.message = 'Message is required.';
  return errors;
}

function useReveal(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function Contact() {
  const [fields, setFields] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const windowRef = useRef(null);
  useReveal(windowRef);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('loading');
    try {
      if (EMAILJS_SERVICE_ID === 'demo-service' || EMAILJS_TEMPLATE_ID === 'demo-template' || EMAILJS_PUBLIC_KEY === 'demo-public') {
        throw new Error('Email service not configured');
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.name,
          from_email: fields.email,
          subject: fields.subject,
          message: fields.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
      setFields(EMPTY_FORM);
    } catch {
      setStatus('error');
    }
  };

  return (
    <Box id="contact" className="section" sx={{ background: '#FFFFFF', pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="md" className="section-inner">
        <h2 className="section-title">Contact</h2>

        <div ref={windowRef} className="window contact-window reveal">
          <div className="window-header">
            <span className="traffic-light close" />
            <span className="traffic-light minimize" />
            <span className="traffic-light maximize" />
            <span className="window-title">New Message</span>
          </div>

          <div className="window-body contact-body">
            <div className="mail-field mail-field--to">
              <span className="mail-field-label">To</span>
              <span className="mail-field-to-value">pmsjacc@gmail.com</span>
            </div>

            <form onSubmit={handleSubmit} className="mail-form" noValidate>
              <div className="mail-field">
                <label className="mail-field-label" htmlFor="contact-name">From</label>
                <input id="contact-name" name="name" type="text" className={`mail-input ${errors.name ? 'mail-input--error' : ''}`} placeholder="Your name" value={fields.name} onChange={handleChange} disabled={status === 'loading'} autoComplete="name" />
                {errors.name && <span className="mail-error">{errors.name}</span>}
              </div>

              <div className="mail-field">
                <label className="mail-field-label" htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" className={`mail-input ${errors.email ? 'mail-input--error' : ''}`} placeholder="your@email.com" value={fields.email} onChange={handleChange} disabled={status === 'loading'} autoComplete="email" />
                {errors.email && <span className="mail-error">{errors.email}</span>}
              </div>

              <div className="mail-field">
                <label className="mail-field-label" htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" type="text" className={`mail-input ${errors.subject ? 'mail-input--error' : ''}`} placeholder="What's this about?" value={fields.subject} onChange={handleChange} disabled={status === 'loading'} />
                {errors.subject && <span className="mail-error">{errors.subject}</span>}
              </div>

              <div className="mail-field mail-field--message">
                <label className="mail-field-label" htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" className={`mail-textarea ${errors.message ? 'mail-input--error' : ''}`} placeholder="Hi Joshika, I wanted to reach out about..." rows={5} value={fields.message} onChange={handleChange} disabled={status === 'loading'} />
                {errors.message && <span className="mail-error">{errors.message}</span>}
              </div>

              <div className="mail-actions">
                <button type="submit" className="mail-send-btn" disabled={status === 'loading'} id="contact-send">
                  {status === 'loading' ? (
                    <>
                      <span className="mail-spinner" aria-hidden="true" />
                      Sending…
                    </>
                  ) : 'Send Message'}
                </button>

                {status === 'success' && (
                  <span className="mail-status mail-status--success" role="alert">✓ Message sent. I’ll get back to you.</span>
                )}
                {status === 'error' && (
                  <span className="mail-status mail-status--error" role="alert">Something went wrong. Try emailing directly at hello@joshika.dev.</span>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="contact-socials">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-social-link">
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <div className="contact-footer">
          <div>Built with care, probably between debugging sessions.</div>
          <span>© {new Date().getFullYear()} Joshika Pachigulla. All rights reserved.</span>
        </div>
      </Container>
    </Box>
  );
}

export default Contact;
