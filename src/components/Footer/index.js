import React from 'react';
import './index.css';

function Footer() {
    return (
        <footer>
        <section id="contact-info" className="contact-info" alt="contact information">
          <h2>Contact Info</h2>
          {/* target blank alternative for react */}
          <a href="mailto: heatherstorseth3@gmail.com" target={"_blank"}>
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://docs.google.com/document/d/1BlfVQj222OgecC24HAn5Wlj2G8MJMamOeUhV4rkn0eA/edit?usp=sharing" target={"_blank"}>
            <i className="fas fa-file"></i>
          </a>
          <a href="www.linkedin.com/in/heather-storseth-5571501b9" target={"_blank"}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/hstor3" target={"_blank"}>
            <i className="fab fa-github-square"></i>
          </a>
          <a href="tel: +1-509-901-1565">
            <i className="fas fa-mobile"></i>
          </a>
        </section>
    </footer>
    )
}

export default Footer;