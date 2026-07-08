import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const experiences = [
  {
    role: 'Assistant SDE Intern',
    company: 'CCC Digital India Pvt Ltd',
    desc: 'Worked on UX research, responsive interfaces, Firebase authentication and production deployment. Most of the learning came from shipping real features and seeing how users actually interacted with them.',
  },
  {
    role: 'Research Intern',
    company: 'SRM University AP',
    desc: 'Explored SegFormer, ZoeDepth and depth estimation. Spent a lot of time reading papers, running experiments, and understanding why some approaches generalise better than others.',
  },
];

function Experience() {
  return (
    <Box id="experience" className="section" sx={{ background: '#F8F7F4' }}>
      <Container maxWidth="md" className="section-inner">
        <Typography variant="h2" className="section-title">
          Experience
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {experiences.map((exp) => (
            <Box
              key={exp.role}
              className="fade-in"
              sx={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '10px',
                p: 3,
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(31, 41, 55, 0.08)',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#1F2937',
                  mb: 0.3,
                }}
              >
                {exp.role}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: '#3B82F6',
                  mb: 1.5,
                }}
              >
                {exp.company}
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.7 }}>
                {exp.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Experience;
