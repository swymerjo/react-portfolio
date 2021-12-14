import React from 'react'
import "./Footer.css";
import { HashLink as Link } from 'react-router-hash-link';

function Footer() {
    return (
        <div className='footer'>
         <section className='footer-contact'>
          <h2>For work enquiries, contact me:</h2> 
          <h3 id="contact-email">sammyjowymerpsych@gmail.com</h3> 
        </section>
        <section className='footer-social-icons'>

        <a href="https://twitter.com/SammyWymer" target="_blank" rel="noreferrer"><i className='fab fa-twitter social-icons' /></a>    
        <a href="https://github.com/swymerjo" target="_blank" rel="noreferrer"><i className='fab fa-github social-icons' /></a>  
        <a href="https://www.linkedin.com/in/sammy-jo-wymer-6391b2205/" target="_blank" rel="noreferrer"><i className='fab fa-linkedin social-icons' /></a>  
        <a href="https://www.instagram.com/sammyjowymer/" target="_blank" rel="noreferrer"><i className='fab fa-instagram social-icons' /></a>    
        </section>
        <Link to="#hero"><button className='scroll-to-top'>Back to top</button></Link>
        </div>
    )
}

export default Footer
