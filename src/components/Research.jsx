import React, { useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './Research.css';

const researchSections = [
  {
    mod: 'challenge',
    label: 'Problem',
    text: 'Standard image models recognise objects but struggle to understand spatial relationships — where things are relative to each other, how deep a scene is, or how layout affects meaning. Most benchmarks do not surface these gaps.',
  },
  {
    mod: 'solution',
    label: 'Approach',
    text: 'Explored SegFormer for transformer-based semantic segmentation and ZoeDepth for monocular depth estimation. Both use attention mechanisms that naturally model spatial context rather than treating pixels in isolation.',
  },
  {
    mod: 'impact',
    label: 'Current Progress',
    text: 'Ran experiments comparing generalisation across different dataset distributions. The strongest signal so far is that architectures that encode spatial structure perform more consistently under distribution shift.',
  },
  {
    mod: 'next',
    label: "What's Next",
    text: 'Testing on egocentric video and exploring how depth estimates can act as auxiliary signals for downstream tasks. The open question is whether spatial priors can be learned efficiently without domain-specific pretraining.',
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
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function Research() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <Box id="research" className="section" sx={{ background: '#FFFFFF' }}>
      <Container maxWidth="md" className="section-inner">
        <h2 className="section-title">Research</h2>

        <div ref={ref} className="window research-window reveal">
          <div className="window-header">
            <span className="traffic-light close" />
            <span className="traffic-light minimize" />
            <span className="traffic-light maximize" />
            <span className="window-title">spatial-reasoning.pdf</span>
          </div>

          <div className="window-body research-body">
            <div className="research-paper-header">
              <p className="research-paper-kicker">Research Note</p>
              <h3 className="research-topic">Transformers & Spatial Understanding in Computer Vision</h3>
              <p className="research-paper-meta">SegFormer • ZoeDepth • Ongoing exploration</p>
            </div>

            <div className="research-sections">
              {researchSections.map((sec) => (
                <div key={sec.mod} className={`case-block case-block--${sec.mod}`}>
                  <span className="case-block-label">{sec.label}</span>
                  <p className="case-block-text">{sec.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Research;
