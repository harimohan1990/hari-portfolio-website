import React from 'react';
import './Contact.css';
import resume from './resume.pdf';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1>Get in Touch</h1>
        <p className="subtitle">
          Let's collaborate! Whether it's a project, opportunity, or idea—I'm open to connecting.
        </p>

        <ul className="contact-list">
          <li><strong>Email:</strong> <a href="mailto:harifrontendengineer@gmail.com">harifrontendengineer@gmail.com</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/harimohan1990" target="_blank" rel="noopener noreferrer">github.com/harimohan1990</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hari-mohan-prajapat-47299b54" target="_blank" rel="noopener noreferrer">linkedin.com/in/hari-mohan-prajapat</a></li>
          <li><strong>BLOG:</strong> <a href="https://codewithhari.dev/" target="_blank" rel="noopener noreferrer">Tech Blog</a></li>

          <li><strong>Phone:</strong> <a href="tel:+916366653022">+91 63666 53022</a></li>
        </ul>

        <div className="resume-download">
          <a
            href={resume}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            📄 Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
