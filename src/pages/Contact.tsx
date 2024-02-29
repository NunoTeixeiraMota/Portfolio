import './Contact.css'; // Import the CSS file

const Contact = () => {
    return (
        <form action="https://api.web3forms.com/submit" method="POST" id="form">
            <fieldset>
                <legend>Contact Form</legend>
                <input type="hidden" name="access_key" value="c4cf5c9d-d2a5-485a-b5b4-82940c6e3e10" />
                <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                <input type="hidden" name="redirect" value="https://portfolio-nunoteixeiramotas-projects.vercel.app/" />
                <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
                <div>
                    <label htmlFor="name">Full Name</label><br />
                    <input type="text" name="name" id="name" placeholder="John" required />
                    <br /><br />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label><br />
                    <input type="email" name="email" id="email" placeholder="you@company.com" required /><br /><br />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label><br />
                    <input type="text" name="phone" id="phone" placeholder="+351 911-111-111" required /><br /><br />
                </div>
                <div>
                    <label htmlFor="message">Your Message</label><br />
                    <textarea rows={5} name="message" id="message" placeholder="Your Message" required></textarea><br /><br />
                </div>
                <button type="submit">Send Message</button>
            </fieldset>
        </form>
    );
};

export default Contact;
