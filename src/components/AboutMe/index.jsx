// src/pages/AboutMe/index.jsx

import React from 'react';
import './AboutMe.css'; 


const AboutMe = ({ }) => {
  return (
    <section id="about" className="about-me">
    
    <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24   fw-600 w-100 mb-0 " 
            }
          >
            Know Us More
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " 
            }
          >
            ABOUT US
            <span className="heading-separator-line  d-block mx-auto" />
          </p>
        </div>
     <div className="container">
      <p className="introduction">
      At Maxidom, we are dedicated to the art of fine carpentry, bringing timeless beauty and meticulous craftsmanship to every piece we create. Located in the vibrant city of Toronto, Maxidom was founded by a passionate artisan, committed to blending traditional techniques with contemporary design.

With over a decade of hands-on experience, our founder embarked on this journey with a simple mission: to transform ordinary spaces into extraordinary living experiences through the power of skilled carpentry. Our work is driven by a deep love for woodwork and a desire to see the grain of every piece tell its own unique story.
      </p>
      <div className="personal-details">
        <p><strong>From:</strong> Toronto, Canada</p>
        <p><strong>Skills:</strong> JavaScript, React, Node.js, MongoDB ,Architectural Design</p>
        <p><strong>Hobbies:</strong> Driving, Woodworking, Urban Exploration</p>
      </div>
    </div>
  </section>
  );
};

export default AboutMe;
