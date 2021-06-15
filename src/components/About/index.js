import React from 'react';
import './index.css';
// import '../../assets';

function About() {
    return (
        <article id="about-me" className="stuff" alt="about me section">
        <h2>About Me</h2>
        <img src='../../assets/pro-pic.JPG' alt='profile' />
        <p>
          Hi, I'm Heather! I am a full stack developer whith a great appreciation 
          for both the front and backend sides of apps. I enjoy creating
          modern apps that are visually appealing, have a strong foundation, and 
          a smooth functionality. I am a natural problem solver so debugging and 
          creating new solutions to problems comes easy to me. My coding 
          knowledge is primarily JavaScript based but I've found that I'm able to 
          pick up new languages with no problem.
        </p>
      </article>
    )
}

export default About;