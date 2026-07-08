import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const statusCards = [
  { label: 'Building', value: 'Projects & experiments' },
  { label: 'Learning', value: 'Cloud, CV, transformers' },
  { label: 'Research', value: 'SegFormer & ZoeDepth' },
  { label: 'Goal', value: 'Ship useful software' },
];

function Hero() {
  return (
    <Box id="home" sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 }, background: '#F8F7F4' }}>
      <Container maxWidth="md">
        <div className="window fade-in">
          <div className="window-header">
            <span className="traffic-light close" />
            <span className="traffic-light minimize" />
            <span className="traffic-light maximize" />
            <span className="window-title">terminal</span>
          </div>
          <div className="window-body" style={{ background: '#FCFCFC' }}>
            <Typography
              component="div"
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.85rem',
                color: '#6B7280',
                mb: 1.5,
              }}
            >
              $ whoami<span className="cursor" />
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.75rem' },
                color: '#1F2937',
                mb: 1,
              }}
            >
              Joshika Pachigulla
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.05rem',
                color: '#3B82F6',
                fontWeight: 500,
                mb: 0.5,
              }}
            >
              Computer Science Engineering (AI/ML)
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.95rem',
                color: '#6B7280',
                mb: 3,
              }}
            >
              SRM University AP
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: '1rem', md: '1.15rem' },
                color: '#1F2937',
                lineHeight: 1.6,
                maxWidth: '640px',
              }}
            >
              I like building software that solves real problems — sometimes with AI, sometimes with cloud, and often by learning something new along the way.
            </Typography>
          </div>
        </div>

        <Grid container spacing={2} sx={{ mt: 4 }}>
          {statusCards.map((card) => (
            <Grid size={{ xs: 6, md: 3 }} key={card.label}>
              <Box
                className="fade-in"
                sx={{
                  background: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '10px',
                  p: 2,
                  boxShadow: '0 1px 2px rgba(31, 41, 55, 0.04)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 24px rgba(31, 41, 55, 0.10)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#6B7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    mb: 0.5,
                  }}
                >
                  {card.label}
                </Typography>
                <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#1F2937' }}>
                  {card.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
