function Scripts() {
    return (
        <div >
            <h2 className="text-center text-warning mb-4">Python Scripts</h2>
    
            {/* Python Scripts*/ }
            <div className="row mb-5">
                {/* Project Card 1*/ }
                <div className="col-md-4 mb-4">
                    <div className="card bg-transparent border-light text-light">
                        <div className="card-body">
                            <h4 className="card-title text-warning">Zoom Automation with Selenium</h4>
                            <p className="card-text"> Developed a Python script utilizing Selenium and Chrome WebDriver to automate the process of joining Zoom meetings. This tool streamlines the process of attending meetings, especially for regular users.</p>

                            <div className="card-highlights mt-3">
                                <ul>
                                    <li>Automate repetitive tasks like entering meeting IDs and passwords.</li>
                                    <li>Set schedules for automated joining of recurring meetings.</li>
                                    <li>Enhance productivity by reducing manual steps.</li>
                                </ul>
                            </div>

                            {/*<a href="https://beautyprism12.000webhostapp.com/" target="_blank" className="btn btn-warning">View Project</a>*/}
                        </div>
                    </div>
                </div>
                {/* Project Card 2*/ }
                <div className="col-md-4 mb-4">
                    <div className="card bg-transparent border-light text-light">
                        <div className="card-body">
                            <h4 className="card-title text-warning">Telegram Business Info Bot</h4>
                            <p className="card-text">Developed a Telegram bot designed to provide users with URLs for various social media platforms and other important business-related links. The bot is hosted and runs continuously on an AWS EC2 instance.</p>

                            <div className="card-highlights mt-3">
                                <ul>
                                    <li>Instantly provides essential business URLs upon request.</li>
                                    <li>Efficiently hosted on AWS EC2 for 24/7 uptime.</li>
                                    <li>Integrated with the Telegram bot API for seamless user interactions and updates.</li>
                                </ul>
                            </div>

                            {/* <a href="link-to-web-project1" className="btn btn-warning">View Project</a> */}
                        </div>
                    </div>
                </div>
                {/* Add more project cards for Web Development as needed...*/ }
                
            </div>
    
        </div>
    );
  }
  
  export default Scripts;