// // App.js
// import React, { useState } from 'react';
// import WebProject from './component/webproject';  // Adjust path accordingly
// import Project from './component/projects';              // Adjust path accordingly

// function App() {
//   const [showContent, setShowContent] = useState('default');

//   const handleButtonClick = () => {
//     setShowContent('webproject');
//   }

//   return (
//     <section id="projects" className="py-5 m-4 rounded" style={{ backgroundColor: '#333' }}>    
 
//         {showContent === 'default' && <Project onButtonClick={handleButtonClick} />}
//         {showContent === 'webproject' && <WebProject />}
//     </section>
//   );
// }

// export default App;



import './App.css';
import Header from './component/header';
import About from './component/about';
import Project from './component/projects';
import Skills from './component/skills';
import Contact from './component/contact';
import WebProject from './component/webproject';
import './styles/header.css';
import './styles/about.css';
import './styles/project.css';
import './styles/test.css';
import React, { useState } from 'react';

function App() {
  const [showContent, setShowContent] = useState('about');
  const handleAboutClick = () => {
    setShowContent('about');
  }
  const handleProjectClick = () => {
    setShowContent('project');
  }
  const handleSkillsClick = () => {
    setShowContent('skills');
  }
  const handleContactClick = () => {
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
    </div>
  );
}

export default App;


// const [showWebProjects, setShowWebProjects] = useState(false);

//   return (
//     <section id="projects-section" className="py-5 m-4 rounded" style={{ backgroundColor: '#333' }}>
//       <div className="container">
//         <h2 className="text-center text-light mb-4">My Projects</h2>

//         <a href="#" onClick={(e) => { e.preventDefault(); setShowWebProjects(!showWebProjects); }}>
//           {showWebProjects ? "Show General Projects" : "Show Web Projects"}
//         </a>

//         {showWebProjects ? <WebProjects /> : <Projects />}
//       </div>
//     </section>
//     </div>
//   );