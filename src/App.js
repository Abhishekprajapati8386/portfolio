
import './App.css';
import Header from './component/header';
import About from './component/about';
import Project from './component/projects';
import Skills from './component/skills';
import Contact from './component/contact';
import Sidebar from './component/sidebar';
//import WebProject from './component/webproject';
import './styles/header.css';
import './styles/about.css';
import './styles/project.css';
import './styles/test.css';
import './styles/sidebar.css';
import React, { useState } from 'react';


function App() {
  const [showContent, setShowContent] = useState('about');
  const handleAboutClick = (event) => {
    event.preventDefault();
    setShowContent('about');
  }
  const handleProjectClick = (event) => {
    event.preventDefault();
    setShowContent('project');
  }
  const handleSkillsClick = (event) => {
    event.preventDefault();
    setShowContent('skills');
  }
  const handleContactClick = (event) => {
    event.preventDefault();
    setShowContent('contact');
  }
  return (
    <div className="App">
      <Header About={handleAboutClick} Project={handleProjectClick} Skills={handleSkillsClick} Contact={handleContactClick} />
      <section className="py-5 rounded main-section" >
          {showContent === 'about' && <About />}
          {showContent === 'project' && <Project />}
          {showContent === 'skills' && <Skills />}
          {showContent === 'contact' && <Contact />}
      </section>
      <Sidebar/>
    </div>
  );
}

export default App;
