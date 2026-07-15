import React, { useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './Resume.css';

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

function Resume() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <Box id="resume" className="section" sx={{ background: '#F8F7F4' }}>
      <Container maxWidth="md" className="section-inner">
        <h2 className="section-title">Resume</h2>

        <div ref={ref} className="window reveal">
          <div className="window-header">
            <span className="traffic-light close" />
            <span className="traffic-light minimize" />
            <span className="traffic-light maximize" />
            <span className="window-title">resume.pdf — Preview</span>
          </div>

          <div className="window-body resume-body">
            <div className="resume-preview-card">
              <div className="resume-preview-header">
                <h3 className="resume-preview-name">Joshika Pachigulla</h3>
                <p className="resume-preview-sub">Computer Science Engineering (AI/ML) · SRM University AP</p>
              </div>

              <div className="resume-section">
                <span className="resume-section-label">Summary</span>
                <p className="resume-section-text">
                  Software engineering student focused on building useful, real-world systems. Experience spans computer vision, cloud pipelines, full-stack web, and research in transformer-based vision models.
                </p>
              </div>

              <div className="resume-section">
                <span className="resume-section-label">Experience</span>
                <ul className="bullet-list">
                  <li>Assistant SDE Intern — CCC Digital India Pvt Ltd</li>
                  <li>Research Intern — SRM University AP</li>
                </ul>
              </div>

              <div className="resume-section">
                <span className="resume-section-label">Projects</span>
                <ul className="bullet-list">
                  <li>Exercise Posture Correction System</li>
                  <li>DevSecOps Vulnerability Intelligence & Alerting System</li>
                  <li>Online Book Store</li>
                </ul>
              </div>
            </div>

            <div className="resume-actions">
              <a href="/resume.pdf" download="Joshika_Pachigulla_Resume.pdf" className="resume-download-btn" aria-label="Download resume PDF">
                <DownloadIcon sx={{ fontSize: 16 }} />
                Download Resume
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-open-btn" aria-label="Open resume in new tab">
                <OpenInNewIcon sx={{ fontSize: 15 }} />
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Resume;
