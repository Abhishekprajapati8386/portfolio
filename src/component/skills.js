
function Skills() {
    return (
        <div className="container">
            <h2 className="text-center text-light mb-4">My Skills</h2>
    
            <div className="card bg-transparent border-light text-light overflow-scroll h-75">   
                <div className="row text-center p-2 ">

                    {/* Programming Languages */}
                    <div className="col-md-4">
                        <i className="fas fa-code fa-3x text-warning mb-3"></i>
                        <h4 className="text-warning">Programming Languages</h4>
                        <p>C/C++, Python, PHP</p>
                    </div>

                    {/* Database */}
                    <div className="col-md-4">
                        <i className="fas fa-database fa-3x text-warning mb-3"></i>
                        <h4 className="text-warning">Database</h4>
                        <p>MySQL</p>
                    </div>

                    {/* Automation Tools */}
                    <div className="col-md-4">
                        <i className="fas fa-robot fa-3x text-warning mb-3"></i>
                        <h4 className="text-warning">Automation Tools</h4>
                        <p>PyAutoGUI, Selenium</p>
                    </div>
                </div>

                <div className="row text-center mt-5">

                    {/* Designing */}
                    <div className="col-md-4">
                        <i className="fas fa-paint-brush fa-3x text-warning mb-3"></i>
                        <h4 className="text-warning">Designing</h4>
                        <p>HTML, CSS, JavaScript</p>
                    </div>

                    {/* Operating System */}
                    <div className="col-md-4">
                        <i className="fas fa-laptop fa-3x text-warning mb-3"></i>
                        <h4 className="text-warning">Operating System</h4>
                        <p>Windows, Linux</p>
                    </div>

                    {/* Cloud */}
                    <div className="col-md-4">
                        <i className="fas fa-cloud fa-3x text-warning mb-3"></i>
                        <h4 className="text-warning">Cloud</h4>
                        <p>AWS</p>
                    </div>

                    {/* IDE */}
                    <div className="col-md-4">
                        <i className="fas fa-code-branch fa-3x text-warning mb-3"></i>
                        <h4 className="text-warning">IDE</h4>
                        <p>Jupyter, VS Code</p>
                    </div>
                </div>
                    
            </div>

        </div>
    );
  }
  
  export default Skills;
  