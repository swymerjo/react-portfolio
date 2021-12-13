import React from 'react';
import '../App.css';
import "./HeroSection.css";


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>SAMMY WYMER</h1>
      <p>Front-end developer</p>
     <span> <button className="projects-button">Projects</button>
      <button className="contact-button">Contact</button></span>
    </div>
  );
}
export default HeroSection;
