function Contact() {
    return (
        
        <div class="container">
            <h2 class="text-center text-light mb-4">Contact Me</h2>
    
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <form action="your_server_endpoint_here" method="POST">
                        {/* Name Input */}
                        <div class="form-group">
                            <label for="name" class="text-light">Name</label>
                            <input type="text" class="form-control" id="name" name="name" required>
                        </div>
    
                        {/* Email Input */}
                        <div class="form-group">
                            <label for="email" class="text-light">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
    
                        {/* Message Textarea */}
                        <div class="form-group">
                            <label for="message" class="text-light">Message</label>
                            <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                        </div>
    
                        {/* Submit Button */}
                        <div class="text-center">
                            <button type="submit" class="btn btn-warning">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default Contact;
  