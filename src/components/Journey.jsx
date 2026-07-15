// import React, { useEffect, useRef } from 'react';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import './Journey.css';

// const chapters = [
//   {
//     number: '01',
//     title: 'The Curiosity',
//     paragraphs: [
//       'Started Computer Science at SRM University AP, drawn toward AI/ML before fully knowing what that meant. Most of year one was spent figuring out what programming actually felt like.',
//       'The most important discovery was not a concept but a habit: debugging is less a skill and more a mode of thinking.',
//     ],
//   },
//   {
//     number: '02',
//     title: 'Learning by Building',
//     paragraphs: [
//       'Built the Online Book Store from scratch — authentication, cart logic, and a PHP backend that forced me to think beyond the surface of the UI.',
//       'Then came the Exercise Posture Correction System, where computer vision, real-time feedback, and messy data made every decision feel concrete.',
//     ],
//   },
//   {
//     number: '03',
//     title: 'Finding AI',
//     paragraphs: [
//       'A research internship at SRM focused on SegFormer and ZoeDepth, which sharpened my view of how modeling choices affect real-world robustness.',
//       'Cloud architecture started to make sense once I stopped treating it as magic and began seeing it as a set of tradeoffs, dependencies, and failure modes.',
//     ],
//   },
//   {
//     number: '04',
//     title: 'Still Learning',
//     paragraphs: [
//       'Right now I am narrowing the gap between curiosity and craft — stepping deeper into system design, problem-solving, and the kinds of projects worth carrying through to completion.',
//       'The goal is not to know everything. It is to build things that teach me something new each time I touch them.',
//     ],
//   },
// ];

// function useReveal(ref) {
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.add('visible');
//           obs.unobserve(el);
//         }
//       },
//       { threshold: 0.12 }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [ref]);
// }

// function ChapterCard({ chapter, delay }) {
//   const ref = useRef(null);
//   useReveal(ref);

//   return (
//     <div
//       ref={ref}
//       className="chapter-block reveal"
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       <span className="chapter-number">{chapter.number}</span>
//       <h3 className="chapter-title">{chapter.title}</h3>
//       <div className="chapter-body">
//         {chapter.paragraphs.map((paragraph) => (
//           <p key={paragraph}>{paragraph}</p>
//         ))}
//       </div>
//       <div className="chapter-divider" aria-hidden="true" />
//     </div>
//   );
// }

// function Journey() {
//   return (
//     <Box id="journey" className="section" sx={{ background: '#FFFFFF' }}>
//       <Container maxWidth="md" className="section-inner">
//         <h2 className="section-title">Journey</h2>

//         <div className="chapter-stack">
//           {chapters.map((ch, i) => (
//             <ChapterCard key={ch.number} chapter={ch} delay={i * 80} />
//           ))}
//         </div>
//       </Container>
//     </Box>
//   );
// }

// export default Journey;

import React, { useEffect, useRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './Journey.css';

const chapters = [
  {
    number: '01',
    title: 'The Curiosity',
    paragraphs: [
      'Started Computer Science at SRM University AP, drawn toward AI/ML before fully knowing what that meant. Most of year one was spent figuring out what programming actually felt like.',
      'The most important discovery was not a concept but a habit: debugging is less a skill and more a mode of thinking.',
    ],
  },
  {
    number: '02',
    title: 'Learning by Building',
    paragraphs: [
      'Built the Online Book Store from scratch — authentication, cart logic, and a PHP backend that forced me to think beyond the surface of the UI.',
      'Then came the Exercise Posture Correction System, where computer vision, real-time feedback, and messy data made every decision feel concrete.',
    ],
  },
  {
    number: '03',
    title: 'Finding AI',
    paragraphs: [
      'A research internship at SRM focused on SegFormer and ZoeDepth, which sharpened my view of how modeling choices affect real-world robustness.',
      'Cloud architecture started to make sense once I stopped treating it as magic and began seeing it as a set of tradeoffs, dependencies, and failure modes.',
    ],
  },
  {
    number: '04',
    title: 'Still Learning',
    paragraphs: [
      'Right now I am narrowing the gap between curiosity and craft — stepping deeper into system design, problem-solving, and the kinds of projects worth carrying through to completion.',
      'The goal is not to know everything. It is to build things that teach me something new each time I touch them.',
    ],
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
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

function ChapterCard({ chapter, delay }) {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <div
      ref={ref}
      className="chapter-block reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="chapter-number">{chapter.number}</span>
      <h3 className="chapter-title">{chapter.title}</h3>
      <div className="chapter-body">
        {chapter.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

function Journey() {
  return (
    <Box id="journey" className="section" sx={{ background: '#FFFFFF' }}>
      <Container maxWidth="md" className="section-inner">
        <h2 className="section-title">$ cat journey.md</h2>

        <div className="chapter-stack">
          {chapters.map((ch, i) => (
            <ChapterCard key={ch.number} chapter={ch} delay={i * 80} />
          ))}
        </div>
      </Container>
    </Box>
  );
}

export default Journey;
