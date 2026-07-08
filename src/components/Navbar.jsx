import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        boxShadow: scrolled ? '0 4px 12px rgba(31, 41, 55, 0.06)' : 'none',
        transition: 'box-shadow 0.25s ease',
      }}
    >
      <Toolbar sx={{ maxWidth: '960px', width: '100%', margin: '0 auto', px: { xs: 2, md: 3 } }}>
        <Box
          component="a"
          href="#home"
          sx={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontWeight: 600,
            color: '#1F2937',
            textDecoration: 'none',
            fontSize: '0.95rem',
            letterSpacing: '-0.02em',
            mr: 'auto',
          }}
        >
          jp.
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              sx={{
                fontFamily: "'Inter', sans-serif",
                textTransform: 'none',
                color: '#6B7280',
                fontSize: '0.85rem',
                fontWeight: 500,
                px: 1.5,
                '&:hover': { color: '#1F2937', background: 'transparent' },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Button
          onClick={() => setMobileOpen(!mobileOpen)}
          sx={{
            display: { xs: 'flex', md: 'none' },
            minWidth: 'auto',
            p: 1,
            color: '#1F2937',
          }}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </Toolbar>

      {mobileOpen && (
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            px: 2,
            pb: 2,
            borderTop: '1px solid #E5E7EB',
            background: '#FFFFFF',
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              sx={{
                justifyContent: 'flex-start',
                fontFamily: "'Inter', sans-serif",
                textTransform: 'none',
                color: '#6B7280',
                fontSize: '0.9rem',
                fontWeight: 500,
                py: 1.2,
                '&:hover': { color: '#1F2937', background: 'transparent' },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      )}
    </AppBar>
  );
}

export default Navbar;
