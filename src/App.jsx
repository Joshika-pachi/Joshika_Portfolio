import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Journey from './components/Journey.jsx';
import Projects from './components/Projects.jsx';
import Research from './components/Research.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      {/* <Research /> */}
      <Experience />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
