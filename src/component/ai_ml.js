function AI_ML() {
    return (
        <div >
            <h2 className="text-center text-warning mb-4">AI & ML Projects</h2>
    
            {/* Web Development Projects*/ }
            <div className="row mb-5">
                {/* Project Card 1*/ }
                <div className="col-md-4 mb-4">
                    <div className="card bg-transparent border-light text-light">
                        <div className="card-body">
                            <h4 className="card-title text-warning">AI-based Emotion Detection</h4>
                            <p className="card-text">Developed an AI/ML-based emotion detection system where users submit an image, and the application identifies and returns the detected emotion.</p>

                            <div className="card-highlights mt-3">
                                <ul>
                                    <li>Utilizes advanced image processing techniques for accurate detection.</li>
                                    <li>Employs deep learning models for recognizing various emotions.</li>
                                    <li>Offers a user-friendly interface for image upload and instant results.</li>
                                </ul>
                            </div>

                            {/*<a href="https://beautyprism12.000webhostapp.com/" target="_blank" className="btn btn-warning">View Project</a>*/}
                        </div>
                    </div>
                </div>
                {/* Add more project cards for Web Development as needed...*/ }
                
            </div>
    
        </div>
    );
  }
  
  export default AI_ML;