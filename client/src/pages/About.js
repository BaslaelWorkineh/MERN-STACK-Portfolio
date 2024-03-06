import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [activeSection, setActiveSection] = useState('resume');

  return (
    <div className='about-container'>
      <div className='header'>
        <button onClick={() => setActiveSection('resume')}>Resume</button>
        <button onClick={() => setActiveSection('portfolio')}>Portfolio</button>
        <button onClick={() => setActiveSection('gallery')}>Gallery</button>
      </div>
      <div className='content'>
        {activeSection === 'resume' && (
          <div className='resume-container'>
            {/* Your resume content here */}
            <h2>Resume Section</h2>
          </div>
        )}
        {activeSection === 'portfolio' && (
          <div className='portfolio-container'>
            {/* Your portfolio content here */}
            <h2>Portfolio Section</h2>
          </div>
        )}
        {activeSection === 'gallery' && (
          <div className='gallery-container'>
            {/* Your gallery content here */}
            <h2>Gallery Section</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
