import React, { useState } from 'react';
import WebProject from './webproject';
import Scripts from './pythonscripts';
import AI_ML from './ai_ml';

function Project({  }) {
    const [showContent, setShowContent] = useState('default');
    const handleWebProjectsClick = () => {
        setShowContent('webproject');
      }
    const handlePythonScriptsClick = () => {
        setShowContent('pythonscripts');
      }
    const handleAiMlClick = () => {
        setShowContent('Ai-Ml');
      }
      const handleBackClick = () => {
        setShowContent('default');
      }
    const defaultproject = (
        <div>
        <h2 className="text-center text-light mb-4">My Projects</h2>
            <div className="row">
                { /* Web Development Project Card */ }  
                <div className="col-md-4 mb-4">
                    <div className="card bg-transparent border-light">
                        <div className="card-body text-light">
                            <h3 className="card-title text-warning">Web Development</h3>
                            <p className="card-text">Crafting responsive and dynamic web experiences with a passion for clean code.</p>
                            <a href="#web-project" onClick={handleWebProjectsClick}  className="btn btn-warning">View Projects</a>
                        </div>
                    </div>
                </div>
    
                {/* Python Scripting Project Card */ }
                <div className="col-md-4 mb-4">
                    <div className="card bg-transparent border-light">
                        <div className="card-body text-light">
                            <h3 className="card-title text-warning">Python Scripting</h3>
                            <p className="card-text">Crafting Python scripts that simplify processes and enhance workflows.</p>
                            <a href="#python-scripts" onClick={handlePythonScriptsClick} className="btn btn-warning" >View Projects</a>
                        </div>
                    </div>
                </div>
    
                {/* AI/ML Project Card */ }
                <div className="col-md-4 mb-4">
                    <div className="card bg-transparent border-light">
                        <div className="card-body text-light">
                            <h3 className="card-title text-warning">AI & Machine Learning</h3>
                            <p className="card-text">At the forefront of AI, creating models that think and learn like us.</p>
                            <a href="#ai-ml-project" onClick={handleAiMlClick} className="btn btn-warning" >View Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
    return (
            <div className="container">
                {showContent === 'default' && defaultproject}
                {showContent !== 'default' && (<a href="#projects" onClick={handleBackClick} className="btn btn-warning">Back</a>)}
                {showContent === 'webproject' && <WebProject />}
                {showContent === 'pythonscripts' && <Scripts />}
                {showContent === 'Ai-Ml' && <AI_ML />}
            </div>
    );
  }
  
  export default Project;
