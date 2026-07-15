import React, { useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './Experience.css';

const experiences = [
  {
    role: 'Assistant SDE Intern',
    company: 'CCC Digital India Pvt Ltd',
    slug: 'sde-intern.log',
    duration: '2024',
    location: 'Remote',
    status: 'Delivered',
    worked: [
      'UX research and responsive interface development',
      'Firebase authentication setup and session handling',
      'Production deployment and post-launch bug triage',
    ],
    learnings: [
      'The gap between “works locally” and “works in production” is where most of the real learning happens.',
      'UX decisions matter more than they appear in code reviews.',
      'Shipping real features to real users is the fastest feedback loop.',
    ],
    tools: ['React.js', 'Firebase', 'Figma', 'Git', 'CSS'],
  },
  {
    role: 'Research Intern',
    company: 'SRM University AP',
    slug: 'research-intern.log',
    duration: '2023–2024',
    location: 'India',
    status: 'Ongoing',
    worked: [
      'Studied SegFormer for transformer-based semantic segmentation',
      'Explored ZoeDepth for monocular depth estimation',
      'Ran experiments to understand generalisation across datasets',
    ],
    learnings: [
      'Reading papers is a skill — understanding which parts actually matter takes time.',
      'Some approaches look great on benchmarks and fall apart on different data distributions.',
      'Research is mostly debugging assumptions, not writing code.',
    ],
    tools: ['Python', 'PyTorch', 'HuggingFace', 'NumPy', 'Jupyter'],
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

function ExperienceWindow({ exp, delay }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div ref={ref} className="window exp-window reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="window-header">
        <span className="traffic-light close" />
        <span className="traffic-light minimize" />
        <span className="traffic-light maximize" />
        <span className="window-title">{exp.slug}</span>
      </div>

      <div className="window-body exp-body">
        <div className="exp-summary">
          <div className="exp-summary-main">
            <p className="exp-company">{exp.company}</p>
            <h3 className="exp-role">{exp.role}</h3>
          </div>
          <div className="exp-summary-meta">
            <div>
              <span className="exp-meta-label">Duration</span>
              <p>{exp.duration}</p>
            </div>
            <div>
              <span className="exp-meta-label">Location</span>
              <p>{exp.location}</p>
            </div>
            <div>
              <span className="exp-meta-label">Status</span>
              <p>{exp.status}</p>
            </div>
          </div>
        </div>

        <div className="exp-sections">
          <div className="exp-section">
            <span className="exp-section-label">What I Worked On</span>
            <ul className="bullet-list">
              {exp.worked.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="exp-section">
            <span className="exp-section-label">Key Learnings</span>
            <ul className="bullet-list">
              {exp.learnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="exp-section">
            <span className="exp-section-label">Technologies Used</span>
            <div className="exp-tools">
              {exp.tools.map((tool) => (
                <span key={tool} className="tag">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <Box id="experience" className="section" sx={{ background: '#F8F7F4' }}>
      <Container maxWidth="md" className="section-inner">
        <h2 className="section-title">$ ls experience/</h2>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <ExperienceWindow key={exp.slug} exp={exp} delay={i * 100} />
          ))}
        </div>
      </Container>
    </Box>
  );
}

export default Experience;
