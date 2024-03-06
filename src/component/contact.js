function Contact() {
    return (
        <div className="container">
            <h2 className="text-center text-light mb-4">Contact Me</h2>
    
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <form action="your_server_endpoint_here" method="POST">
                        {/* Name Input */}
                        <div className="form-group">
                            <label htmlFor="name" className="text-light">Name</label>
                            <input type="text" className="form-control" id="name" name="name" required />
                        </div>
    
                        {/* Email Input */}
                        <div className="form-group">
                            <label htmlFor="email" className="text-light">Email</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                        </div>
    
                        {/* Message Textarea */}
                        <div className="form-group">
                            <label htmlFor="message" className="text-light">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
                        </div>
    
                        {/* Submit Button */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
  
export default Contact;
