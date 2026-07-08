import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

function Resume() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <Box id="resume" className="section" sx={{ background: '#F8F7F4' }}>
      <Container maxWidth="md" className="section-inner">
        <Typography variant="h2" className="section-title">
          Resume
        </Typography>

        <div className="window fade-in">
          <div className="window-header">
            <span className="traffic-light close" />
            <span className="traffic-light minimize" />
            <span className="traffic-light maximize" />
            <span className="window-title">resume.pdf</span>
          </div>
          <div className="window-body" style={{ background: '#FCFCFC' }}>
            <Box
              sx={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '8px',
                p: { xs: 3, md: 5 },
                minHeight: '360px',
                boxShadow: '0 1px 2px rgba(31, 41, 55, 0.04)',
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1F2937',
                  mb: 0.5,
                }}
              >
                Joshika Pachigulla
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#6B7280', mb: 3 }}>
                Computer Science Engineering (AI/ML) — SRM University AP
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  mb: 1,
                }}
              >
                Summary
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.7, mb: 3 }}>
                Software engineering student focused on building useful, real-world systems. Experience spans computer vision, cloud pipelines, full-stack web projects, and research in transformer-based vision models.
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  mb: 1,
                }}
              >
                Experience
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.7, mb: 0.5 }}>
                Assistant SDE Intern — CCC Digital India Pvt Ltd
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.7, mb: 2.5 }}>
                Research Intern — SRM University AP
              </Typography>

              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  mb: 1,
                }}
              >
                Projects
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0, mb: 2.5 }}>
                <Box component="li" sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.6 }}>
                  Exercise Posture Correction System
                </Box>
                <Box component="li" sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.6 }}>
                  DevSecOps Vulnerability Intelligence & Alerting System
                </Box>
                <Box component="li" sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.6 }}>
                  Online Book Store
                </Box>
              </Box>

              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#6B7280',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  mb: 1,
                }}
              >
                Skills
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.7 }}>
                C++, Python, JavaScript, C, React.js, Redux, Git, AWS, MySQL, Figma
              </Typography>
            </Box>

            <Button
              variant="contained"
              onClick={handleDownload}
              startIcon={<DownloadIcon />}
              sx={{
                textTransform: 'none',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                background: '#1F2937',
                borderRadius: '8px',
                px: 3,
                py: 1,
                '&:hover': { background: '#374151' },
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Resume;
