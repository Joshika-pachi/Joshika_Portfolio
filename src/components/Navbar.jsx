import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const SCROLL_OFFSET = 88;

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    const sectionElements = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.intersectionRatio);
        });

        const visible = navItems
          .map((item) => item.href.slice(1))
          .filter((id) => (ratios.get(id) ?? 0) > 0)
          .sort((a, b) => (ratios.get(b) ?? 0) - (ratios.get(a) ?? 0));

        if (visible.length > 0) {
          setActiveSection(visible[0]);
        }
      },
      {
        rootMargin: `-${SCROLL_OFFSET}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    );

    sectionElements.forEach((el) => observer.observe(el));

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href) => activeSection === href.slice(1);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
    >
      <Toolbar className="navbar-toolbar" disableGutters>
        <a href="#home" className="navbar-logo">
          jp.
        </a>

        <nav className="navbar-links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`navbar-link ${isActive(item.href) ? 'navbar-link--active' : ''}`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="navbar-menu-btn"
          disableRipple
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
        </Button>
      </Toolbar>

      {mobileOpen && (
        <nav className="navbar-mobile" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`navbar-mobile-link ${isActive(item.href) ? 'navbar-mobile-link--active' : ''}`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </AppBar>
  );
}

export default Navbar;
