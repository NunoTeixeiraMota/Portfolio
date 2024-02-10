import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
                <h1>Contact Information</h1>
            </div>
            <div className="contact-content">
                <div className="contact-info">
                    <ul>
                        <li>
                            <span><i className="fas fa-envelope"></i></span>
                            <a href="mailto:jnmteixeira@gmail.com">jnmteixeira@gmail.com</a>
                        </li>
                        <li>
                            <span><i className="fab fa-linkedin"></i></span>
                            <a href="https://www.linkedin.com/in/josé-teixeiramt" target="_blank" rel="noopener noreferrer">José Teixeira</a>
                        </li>
                        <li>
                            <span><i className="fas fa-phone"></i></span>
                            <a href="tel:+351915558601">+351 915 558 601</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
