import React from 'react';
// import './index.css';
import './script.js';
import gsap from "gsap";
import { FontAwesome } from 'react-icons/fa';

// import Movement from './script.js';

function Languages() {
    gsap.fromTo(
        "#js",
        { opacity: 0 },
        { delay: 0, opacity: 1, x: 1000, duration: 2.7 }
      );
    
      gsap.fromTo(
        "#html",
        { opacity: 0 },
        { delay: 0.2, opacity: 1, x: 1000, duration: 2.7 }
      );
    
      gsap.fromTo(
        "#css",
        { opacity: 0 },
        { delay: 0.4, opacity: 1, x: 1000, duration: 2.7 }
      );
    
      gsap.fromTo(
        "#node",
        { opacity: 0 },
        { delay: 0.6, opacity: 1, x: 1000, duration: 2.7 }
      );
    
      gsap.fromTo(
        "#react",
        { opacity: 0 },
        { delay: 0.8, opacity: 1, x: 1000, duration: 2.7 }
      );
    
      gsap.fromTo(
        "#data",
        { opacity: 0 },
        { delay: 1, opacity: 1, x: 1000, duration: 2.7 }
      );
    
      gsap.fromTo(
        "#boots",
        { opacity: 0 },
        { delay: 1.2, opacity: 1, x: 1000, duration: 2.7 }
      );
    
      gsap.fromTo(
        "#plus",
        { opacity: 0 },
        { delay: 1.4, opacity: 1, x: 1000, duration: 4, rotation: 1080 }
      );
    
      gsap.fromTo(
        "#snowplow",
        { opacity: 0 },
        { delay: 1.6, opacity: 1, x: 1000, duration: 4.3 }
      );
    return (
        <div>
            <i id="js" className="fab fa-js-square"></i>
            <i id="html" className="fab fa-html5"></i>
            <i id="css" className="fab fa-css3-alt"></i>
            <i id="node" className="fab fa-node-js"></i>
            <i id="react" className="fab fa-react"></i>
            <i id="data" className="fas fa-database"></i>
            <i id="boots" className="fab fa-bootstrap"></i>
            <i id="plus" className="fas fa-plus"></i>
            <i id="snowplow" className="fas fa-snowplow"></i>
        </div>
    )}

    export default Languages;