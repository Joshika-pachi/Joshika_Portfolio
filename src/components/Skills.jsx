import React, { useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './Skills.css';

const skillGroups = [
  {
    label: 'Languages',
    items: ['C++', 'Python', 'JavaScript', 'C'],
  },
  {
    label: 'Frontend',
    items: ['React.js', 'Redux', 'HTML', 'CSS', 'Material UI', 'Figma'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'PHP', 'REST APIs', 'Authentication'],
  },
  {
    label: 'Cloud',
    items: ['AWS', 'Lambda', 'S3', 'CloudWatch', 'SNS'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'Firebase'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Jupyter', 'VS Code', 'Postman'],
  },
];

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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function Skills() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <Box id="skills" className="section" sx={{ background: '#FFFFFF' }}>
      <Container maxWidth="md" className="section-inner">
        <h2 className="section-title">$ cat skills.json</h2>

        <div ref={ref} className="skills-panels reveal">
          {skillGroups.map((group) => (
            <div key={group.label} className="skills-panel">
              <span className="skills-panel-label">{group.label}</span>
              <div className="skills-chips">
                {group.items.map((item) => (
                  <span key={item} className="tag skills-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Box>
  );
}

export default Skills;
