import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function About() {
  return (
    <Box id="about" className="section" sx={{ background: '#F8F7F4' }}>
      <Container maxWidth="md" className="section-inner">
        <Typography variant="h2" className="section-title">
          About
        </Typography>

        <Typography sx={{ fontSize: '1.05rem', color: '#1F2937', mb: 3, lineHeight: 1.7 }}>
          I'm Joshika — a computer science student who spends most of her time somewhere between writing code, breaking it, and figuring out why it broke. I enjoy working on problems that sit at the intersection of software and real-world impact, whether that's a computer vision pipeline, a cloud backend, or a simple frontend that just needs to work better.
        </Typography>

        <Typography sx={{ fontSize: '1.05rem', color: '#1F2937', lineHeight: 1.7 }}>
          Most of what I know didn't come from classrooms alone. It came from internships, side projects, late nights debugging, and a lot of trial and error. I learn best by building, and I build best when I'm slightly out of my depth.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
