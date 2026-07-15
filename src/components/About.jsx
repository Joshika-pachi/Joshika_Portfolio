// import React from 'react';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import './About.css';

// const notes = [
//   { label: 'Current Focus', value: 'Placement prep, systems thinking, and product-minded engineering.', accent: 'blue' },
//   { label: 'Currently Building', value: 'Exercise Posture Correction System with real-time feedback.', accent: 'green' },
//   { label: 'Currently Reading', value: 'Computer vision papers and practical system design notes.', accent: 'amber' },
//   { label: 'Coffee Status', value: 'Essential. Non-negotiable. Always within reach.', accent: 'slate' },
// ];

// function About() {
//   return (
//     <Box id="about" className="section" sx={{ background: '#F8F7F4' }}>
//       <Container maxWidth="md" className="section-inner">
//         <h2 className="section-title">About</h2>

//         <div className="about-layout">
//           <div className="about-content">
//             <div className="about-paper">
//               <p className="about-paragraph">
//                 I’m Joshika — a computer science student who spends most of her time somewhere between writing code, breaking it, and figuring out why it broke. I enjoy working at the intersection of software and real-world impact, whether that means building a computer vision system, shaping a cloud-native backend, or designing a frontend that feels calm and deliberate.
//               </p>

//               <p className="about-paragraph">
//                 Most of what I know did not come from classrooms alone. It came from internships, side projects, late nights debugging, and the kind of trial-and-error that quietly teaches you how systems really behave. I learn best by building, and I build best when the problem is a little uncomfortable.
//               </p>
//             </div>
//           </div>

//           <aside className="about-notes" aria-label="Pinned notes">
//             <p className="about-notes-heading">Pinned Notes</p>
//             {notes.map((note) => (
//               <div className={`about-note about-note--${note.accent}`} key={note.label}>
//                 <span className="about-note-label">{note.label}</span>
//                 <p className="about-note-value">{note.value}</p>
//               </div>
//             ))}
//           </aside>
//         </div>
//       </Container>
//     </Box>
//   );
// }

// export default About;

import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './About.css';

const notes = [
  { label: 'Current Focus', value: 'Placement prep, systems thinking, and product-minded engineering.', accent: 'blue' },
  { label: 'Currently Building', value: 'Exercise Posture Correction System with real-time feedback.', accent: 'green' },
  { label: 'Currently Reading', value: 'Computer vision papers and practical system design notes.', accent: 'amber' },
  { label: 'Coffee Status', value: 'Essential. Non-negotiable. Always within reach.', accent: 'slate' },
];

function About() {
  return (
    <Box id="about" className="section" sx={{ background: '#F8F7F4' }}>
      <Container maxWidth="md" className="section-inner">
        <h2 className="section-title">$ cat README.md</h2>

        <div className="about-layout">
          <div className="about-content">
            <p className="about-paragraph">
              I’m Joshika — a computer science student who spends most of her time somewhere between writing code, breaking it, and figuring out why it broke. I enjoy working at the intersection of software and real-world impact, whether that means building a computer vision system, shaping a cloud-native backend, or designing a frontend that feels calm and deliberate.
            </p>

            <p className="about-paragraph">
              Most of what I know did not come from classrooms alone. It came from internships, side projects, late nights debugging, and the kind of trial-and-error that quietly teaches you how systems really behave. I learn best by building, and I build best when the problem is a little uncomfortable.
            </p>
          </div>

          <aside className="about-notes" aria-label="Pinned notes">
            <p className="about-notes-heading">Pinned Notes</p>
            {notes.map((note) => (
              <div className={`about-note about-note--${note.accent}`} key={note.label}>
                <span className="about-note-label">{note.label}</span>
                <p className="about-note-value">{note.value}</p>
              </div>
            ))}
          </aside>
        </div>
      </Container>
    </Box>
  );
}

export default About;
