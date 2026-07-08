import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const skillGroups = [
  {
    title: 'Languages',
    items: ['C++', 'Python', 'JavaScript', 'C'],
  },
  {
    title: 'Technologies',
    items: ['React.js', 'Redux', 'Git', 'GitHub', 'HTML', 'CSS', 'Figma'],
  },
  {
    title: 'Cloud',
    items: ['AWS'],
  },
  {
    title: 'Database',
    items: ['MySQL'],
  },
];

function Skills() {
  return (
    <Box id="skills" className="section" sx={{ background: '#FFFFFF' }}>
      <Container maxWidth="md" className="section-inner">
        <Typography variant="h2" className="section-title">
          Skills
        </Typography>

        <Grid container spacing={3}>
          {skillGroups.map((group) => (
            <Grid size={{ xs: 12, sm: 6 }} key={group.title}>
              <Box
                className="fade-in"
                sx={{
                  background: '#FCFCFC',
                  border: '1px solid #E5E7EB',
                  borderRadius: '10px',
                  p: 3,
                  height: '100%',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 24px rgba(31, 41, 55, 0.08)',
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
                    mb: 1.5,
                  }}
                >
                  {group.title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;
