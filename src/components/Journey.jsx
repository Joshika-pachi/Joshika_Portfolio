import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const milestones = [
  { year: '2021', title: 'SRM University AP', desc: 'Started Computer Science Engineering with a focus on AI/ML.' },
  { year: '2022', title: 'Online Book Store', desc: 'Built a full e-commerce workflow with authentication, cart, and a PHP backend.' },
  { year: '2023', title: 'Exercise Posture Correction System', desc: 'Created a CV/ML pipeline that gives real-time posture feedback.' },
  { year: '2023', title: 'Research Internship', desc: 'Worked on SegFormer and ZoeDepth for depth estimation and spatial reasoning.' },
  { year: '2024', title: 'Assistant SDE Internship', desc: 'Worked on responsive interfaces, Firebase auth, and production deployment.' },
  { year: '2024', title: 'AWS Cloud Practitioner', desc: 'Got a clearer picture of how cloud services actually fit together.' },
  { year: '2024', title: 'GSSoC', desc: 'Contributed to open source and learned how real projects handle collaboration.' },
  { year: '2025', title: 'Placement Preparation', desc: 'Currently refining problem-solving, system design, and project depth.' },
];

function Journey() {
  return (
    <Box id="journey" className="section" sx={{ background: '#FFFFFF' }}>
      <Container maxWidth="md" className="section-inner">
        <Typography variant="h2" className="section-title">
          Journey
        </Typography>

        <Box sx={{ position: 'relative', pl: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 15, md: 19 },
              top: 8,
              bottom: 8,
              width: '2px',
              background: '#E5E7EB',
            }}
          />

          {milestones.map((m, i) => (
            <Box
              key={m.title}
              className="fade-in"
              sx={{
                position: 'relative',
                mb: 4,
                '&:last-child': { mb: 0 },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: -37, md: -45 },
                  top: 2,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: i === milestones.length - 1 ? '#3B82F6' : '#FFFFFF',
                  border: `2px solid ${i === milestones.length - 1 ? '#3B82F6' : '#C77D36'}`,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#6B7280',
                  mb: 0.3,
                }}
              >
                {m.year}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#1F2937',
                  mb: 0.5,
                }}
              >
                {m.title}
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6 }}>
                {m.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Journey;
