import './Contact.css'; // Import the CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>Message</h2>
                <form action="https://api.web3forms.com/submit" method="POST" id="form">
                    <input type="hidden" name="access_key" value="c4cf5c9d-d2a5-485a-b5b4-82940c6e3e10" />
                    <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                    <input type="hidden" name="redirect" value="https://portfolio-nunoteixeiramotas-projects.vercel.app/" />
                    <div className="input-group">
                        <input type="text" name="name" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" name="email" id="email" placeholder="Your Email" required />
                    </div>
                    <div className="input-group">
                        <input type="text" name="phone" id="phone" placeholder="Phone Number" required />
                    </div>
                    <div className="input-group">
                        <textarea name="message" id="message" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="input-group">
                        <button type="submit" className="submit-btn">Send Message</button>
                    </div>
                </form>
            </div>
            <div className="contact-info">
                <h3>Contact me</h3>
                <p>Open for any suggestion or just to have a chat</p>
                <div className="info">
                    <p>Email: jnmteixeira@gmail.com</p>
                    <p>Linkedin: <a href='https://www.linkedin.com/in/jos%C3%A9-teixeiramt/'>Nuno Teixeira</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
