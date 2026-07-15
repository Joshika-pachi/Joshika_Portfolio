import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './Hero.css';

const PROMPT_TEXT = '$ whoami';

const statusItems = [
  { key: 'building', label: 'building', value: 'Exercise Posture Correction System' },
  { key: 'learning', label: 'learning', value: 'System Design' },
  { key: 'research', label: 'researching', value: 'SegFormer + ZoeDepth' },
  { key: 'solving', label: 'solving', value: 'DSA Trees & Graphs' },
  { key: 'reading', label: 'reading', value: 'Computer Vision papers' },
];

function Hero() {
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        const next = indexRef.current + 1;
        setTyped(PROMPT_TEXT.slice(0, next));
        indexRef.current = next;
        if (next >= PROMPT_TEXT.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 72);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((current) => (current + 1) % statusItems.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentStatus = statusItems[statusIndex];

  return (
    <Box id="home" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 }, background: '#F8F7F4' }}>
      <Container maxWidth="md">
        <div className="window fade-in window-open">
          <div className="window-header">
            <span className="traffic-light close" />
            <span className="traffic-light minimize" />
            <span className="traffic-light maximize" />
            <span className="window-title">terminal — joshika@portfolio</span>
          </div>
          <div className="window-body hero-terminal-body">
            <p className="hero-prompt" aria-label="whoami command">
              {typed}
              <span className="cursor" aria-hidden="true" />
            </p>

            {done && (
              <>
                <h1 className="hero-name">Joshika Pachigulla</h1>
                <p className="hero-role">Computer Science Engineering (AI/ML)</p>
                <p className="hero-school">SRM University AP</p>
                <p className="hero-bio">
                  I like building software that solves real problems — sometimes with AI, sometimes with cloud, and often by learning something new along the way.
                </p>
              </>
            )}
          </div>
        </div>

        <div className="hero-status-strip fade-in">
          <div className="hero-status-prompt">$ status --watch</div>
          <div className="hero-status-inner">
            <div key={currentStatus.key} className="hero-status-line">
              <span className="hero-status-prefix">⚡ currently</span>
              <span className="hero-status-label">{currentStatus.label}</span>
              <span className="hero-status-colon">:</span>
              <span className="hero-status-value">{currentStatus.value}</span>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Hero;
