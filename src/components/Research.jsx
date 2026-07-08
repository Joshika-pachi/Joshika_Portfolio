import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const focusAreas = [
  { title: 'SegFormer', desc: 'Transformer-based semantic segmentation architectures.' },
  { title: 'ZoeDepth', desc: 'Monocular depth estimation with robust generalisation.' },
  { title: 'Spatial Reasoning', desc: 'How models understand layout, depth, and context in images.' },
];

function Research() {
  return (
    <Box id="research" className="section" sx={{ background: '#FFFFFF' }}>
      <Container maxWidth="md" className="section-inner">
        <Typography variant="h2" className="section-title">
          Research
        </Typography>

        <Typography sx={{ fontSize: '1.05rem', color: '#1F2937', mb: 4, lineHeight: 1.7 }}>
          My current interest sits at the intersection of transformers and computer vision. I'm exploring how these models understand spatial structure, not just pixels. This is an ongoing learning path rather than finished research.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {focusAreas.map((area) => (
            <Box
              key={area.title}
              className="fade-in"
              sx={{
                background: '#FCFCFC',
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
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1F2937',
                  mb: 0.5,
                }}
              >
                {area.title}
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6 }}>
                {area.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Research;
