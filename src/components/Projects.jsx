import React, { useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './Projects.css';

const projects = [
  {
    name: 'Exercise Posture Correction System',
    slug: 'posture-correction',
    summary: 'Real-time AI feedback for exercise form using computer vision.',
    github: 'https://github.com/joshika',
    demo: null,
    challenge: 'Build an AI system that monitors exercise posture and gives meaningful corrective feedback — in real time, not just after the fact.',
    solution: 'A computer vision and machine learning pipeline that analyzes joint positions frame-by-frame and generates corrective cues. Feature engineering mattered more than model complexity.',
    impact: 'Delivered practical real-time posture feedback and showed that thoughtful feature design can outperform brute-force model scaling.',
    lessons: 'Good data and careful feature engineering often matter more than simply choosing a larger model. Garbage in, garbage out — regardless of architecture.',
    next: 'Support more exercise types, build a cleaner dataset, and test generalisation across body types and camera angles.',
    stack: ['Python', 'OpenCV', 'scikit-learn', 'MediaPipe'],
  },
  {
    name: 'DevSecOps Vulnerability Intelligence & Alerting System',
    slug: 'devsecops-alerting',
    summary: 'Event-driven serverless pipeline for automated security monitoring on AWS.',
    github: 'https://github.com/joshika',
    demo: null,
    challenge: 'Design a cloud pipeline that automatically detects, processes, and notifies on system events — without manual polling or brittle scripts.',
    solution: 'A serverless AWS architecture with Lambda for processing, S3 for storage, CloudWatch for observability, and SNS for alerting. Each component handles a single responsibility.',
    impact: 'Created a scalable monitoring workflow with near-zero operational overhead and clear failure boundaries.',
    lessons: 'Cloud architecture is about designing reliable systems, not just connecting services. Failure modes matter as much as the happy path.',
    next: 'Improve dashboards, add anomaly detection, and automate remediation for common vulnerability patterns.',
    stack: ['AWS Lambda', 'S3', 'CloudWatch', 'SNS', 'Python'],
  },
  {
    name: 'Online Book Store',
    slug: 'book-store',
    summary: 'End-to-end e-commerce platform with auth, cart, and order management.',
    github: 'https://github.com/joshika',
    demo: null,
    challenge: 'Build a complete e-commerce workflow — from login to checkout — that actually works end to end, not just in demos.',
    solution: 'Developed authentication, a shopping cart, a PHP backend, and MySQL integration. The scope forced learning at every layer of the stack.',
    impact: 'Delivered full CRUD, session-based auth, and order processing in a single cohesive system.',
    lessons: 'Backend logic and database design matter just as much as the frontend. A polished UI on top of a fragile backend is still a fragile system.',
    next: 'Responsive redesign, payment integration, and a transition to a more modern stack.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];

const caseSections = [
  { key: 'challenge', label: 'Challenge', mod: 'challenge' },
  { key: 'solution', label: 'Solution', mod: 'solution' },
  { key: 'impact', label: 'Impact', mod: 'impact' },
  { key: 'lessons', label: 'Lessons Learned', mod: 'lessons' },
  { key: 'next', label: 'Next Iteration', mod: 'next' },
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
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function ProjectWindow({ project }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div ref={ref} className="window project-window reveal">
      <div className="window-header project-window-header">
        <span className="traffic-light close" />
        <span className="traffic-light minimize" />
        <span className="traffic-light maximize" />
        <span className="project-window-title">{project.slug}.app</span>
        <div className="project-window-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action-link" aria-label="GitHub">
              <GitHubIcon sx={{ fontSize: 15 }} />
              <span>GitHub</span>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-action-link project-action-link--demo" aria-label="Live Demo">
              <OpenInNewIcon sx={{ fontSize: 13 }} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>

      <div className="window-body project-window-body">
        <div className="project-hero">
          <p className="project-eyebrow">Case Study</p>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-summary">{project.summary}</p>
        </div>

        <div className="project-stack-row">
          <span className="project-meta-label">Built With</span>
          <div className="project-stack">
            {project.stack.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-case-grid">
          {caseSections.map((sec, i) => (
            <div key={sec.key} className={`case-block case-block--${sec.mod}`}>
              <div className="case-block-head">
                <span className="case-block-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="case-block-label">{sec.label}</span>
              </div>
              <p className="case-block-text">{project[sec.key]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Box id="projects" className="section" sx={{ background: '#F8F7F4' }}>
      <Container maxWidth="md" className="section-inner">
        <h2 className="section-title">$ ls projects/</h2>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectWindow key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Box>
  );
}

export default Projects;
