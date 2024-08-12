// src/components/Contact.js

import React from 'react';
import './Header.css';


function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>Feel free to reach out to me via email or connect with me on social media.</p>
      <ul className="contact-list">
        <li><a href="mailto:youremail@example.com">Email: youremail@example.com</a></li>
        <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
    </section>
  );
}

export default Contact;
