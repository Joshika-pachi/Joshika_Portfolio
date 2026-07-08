import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const projects = [
  {
    name: 'Exercise Posture Correction System',
    challenge: 'Creating an AI system capable of monitoring exercise posture and providing meaningful corrective feedback.',
    solution: 'Built a computer vision and machine learning pipeline to analyse posture and generate corrective recommendations.',
    impact: ['Real-time posture feedback', 'Practical AI application', 'Strong understanding of feature engineering'],
    lessons: 'Good data and thoughtful feature engineering often matter more than simply using a larger model.',
    next: 'Support more exercises, improve datasets, and strengthen generalisation.',
    stack: ['Python', 'Computer Vision', 'Machine Learning'],
  },
  {
    name: 'DevSecOps-Based Vulnerability Intelligence & Alerting System',
    challenge: 'Building an event-driven cloud pipeline that automatically detects, processes and notifies system events.',
    solution: 'Designed a serverless AWS pipeline using Lambda, S3, CloudWatch and SNS.',
    impact: ['Automated monitoring', 'Better observability', 'Scalable event processing'],
    lessons: 'Cloud architecture is more about designing reliable systems than simply connecting services.',
    next: 'Improve dashboards and security automation.',
    stack: ['AWS', 'Lambda', 'S3', 'CloudWatch', 'SNS'],
  },
  {
    name: 'Online Book Store',
    challenge: 'Build a complete e-commerce workflow from frontend to backend.',
    solution: 'Developed authentication, shopping cart, PHP backend and MySQL integration.',
    impact: ['End-to-end CRUD', 'Authentication', 'Order processing'],
    lessons: 'Backend logic and database design matter just as much as frontend UI.',
    next: 'Responsive improvements and payment integration.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];

function ProjectWindow({ project }) {
  return (
    <div className="window fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="window-header">
        <span className="traffic-light close" />
        <span className="traffic-light minimize" />
        <span className="traffic-light maximize" />
        <span className="window-title">{project.name.toLowerCase().replace(/\s+/g, '-')}.app</span>
      </div>
      <div className="window-body" style={{ flex: 1 }}>
        <Box sx={{ mb: 2.5 }}>
          <Typography
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              mb: 0.5,
            }}
          >
            Challenge
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.6 }}>
            {project.challenge}
          </Typography>
        </Box>

        <Box sx={{ mb: 2.5 }}>
          <Typography
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              mb: 0.5,
            }}
          >
            Solution
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.6 }}>
            {project.solution}
          </Typography>
        </Box>

        <Box sx={{ mb: 2.5 }}>
          <Typography
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              mb: 0.5,
            }}
          >
            Impact
          </Typography>
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            {project.impact.map((item) => (
              <Box component="li" key={item} sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.6 }}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 2.5 }}>
          <Typography
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              mb: 0.5,
            }}
          >
            Lessons Learned
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.6 }}>
            {project.lessons}
          </Typography>
        </Box>

        <Box sx={{ mb: 2.5 }}>
          <Typography
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              mb: 0.5,
            }}
          >
            Next Iteration
          </Typography>
          <Typography sx={{ fontSize: '0.95rem', color: '#1F2937', lineHeight: 1.6 }}>
            {project.next}
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#6B7280',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              mb: 0.8,
            }}
          >
            Tech Stack
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
            {project.stack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </Box>
        </Box>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Box id="projects" className="section" sx={{ background: '#F8F7F4' }}>
      <Container maxWidth="md" className="section-inner">
        <Typography variant="h2" className="section-title">
          Projects
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid size={{ xs: 12 }} key={project.name}>
              <ProjectWindow project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
