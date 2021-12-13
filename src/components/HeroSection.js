import React from 'react';
import '../App.css';
import "./HeroSection.css";



function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1>SAMMY WYMER</h1>
      <p>Front-end developer</p>
     <span> 
       <a href='/ProjectCards#project-title' className="projects-button">Projects</a>
      <a href="/Footer#contact-email" className="contact-button">Contact</a></span>
    </div>
  );
}
export default HeroSection;
