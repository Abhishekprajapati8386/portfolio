function WebProject() {
    return (
        <div >
            <h2 className="text-center text-warning mb-4">Web Development</h2>
    
            {/* Web Development Projects*/ }
            <div className="row mb-5">
                {/* Project Card 1*/ }
                <div className="col-md-4 mb-4">
                    <div className="card bg-transparent border-light text-light">
                        <div className="card-body">
                            <h4 className="card-title text-warning">E-commerce Admin Panel</h4>
                            <p className="card-text">Developed a dynamic admin panel for an e-commerce platform. Empowered administrators with robust controls over product listings.</p>

                            <div className="card-highlights mt-3">
                                <ul>
                                    <li>Add, modify, or delete products seamlessly.</li>
                                    <li>Real-time adjustments to inventory.</li>
                                    <li>Intuitive UI/UX for efficient product management.</li>
                                </ul>
                            </div>

                            <a href="https://beautyprism12.000webhostapp.com/" target="_blank" className="btn btn-warning">View Project</a>
                        </div>
                    </div>
                </div>
                {/* Project Card 2*/ }
                <div className="col-md-4 mb-4">
                    <div className="card bg-transparent border-light text-light">
                        <div className="card-body">
                            <h4 className="card-title text-warning">Real-time Web Chat App</h4>
                            <p className="card-text">Developed a responsive chat application integrating AJAX for real-time data retrieval and seamless communication.</p>

                            <div className="card-highlights mt-3">
                                <ul>
                                    <li>Real-time messaging leveraging AJAX techniques.</li>
                                    <li>Efficient data-fetching without page refreshes.</li>
                                    <li>User-friendly interface for seamless interactions.</li>
                                </ul>
                            </div>

                            {/*<a href="link-to-web-project1" className="btn btn-warning">View Project</a>*/}
                        </div>
                    </div>
                </div>
                {/* Project Card 3*/ }
                <div className="col-md-4 mb-4">
                    <div className="card bg-transparent border-light text-light">
                        <div className="card-body">
                            <h4 className="card-title text-warning">My React Portfolio</h4>
                            <p className="card-text">Designed and developed my personal portfolio leveraging the power of ReactJS for dynamic and responsive user experiences.</p>

                            <div className="card-highlights mt-3">
                                <ul>
                                    <li>Single Page Application ensuring smooth navigation.</li>
                                    <li>Component-based design for reusability and maintainability.</li>
                                    <li>Integrated with modern UI/UX practices for a visually appealing interface.</li>
                                </ul>
                            </div>

                            {/*<a href="link-to-web-project1" className="btn btn-warning">View Project</a>*/}
                        </div>
                    </div>
                </div>
                {/* Add more project cards for Web Development as needed...*/ }
                
            </div>
    
        </div>
    );
  }
  
  export default WebProject;