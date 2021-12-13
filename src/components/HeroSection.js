import React from 'react';
import '../App.css';
import "./HeroSection.css";
import { HashLink as Link } from 'react-router-hash-link';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-4.mp4' autoPlay loop muted />
      <h1>SAMMY WYMER</h1>
      <p>Front-end developer</p>
     <span> 
       <Link to='#project-title' className="projects-button">Projects</Link>
      <Link to="#contact-email" className="contact-button">Contact</Link></span>
    </div>
  );
}
export default HeroSection;
