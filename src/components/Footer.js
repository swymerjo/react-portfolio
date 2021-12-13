import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div className='footer'>
         <section className='footer-contact'>
          <h2>For work enquiries, contact me:</h2> 
          <h3 id="contact-email">sammyjowymerpsych@gmail.com</h3> 
        </section>
        <section className='footer-social-icons'>
        <i className='fab fa-twitter social-icons' />    
        <i className='fab fa-github social-icons' />    
        <i className='fab fa-linkedin social-icons' />    
        <i className='fab fa-instagram social-icons' />     
        </section>
        </div>
    )
}

export default Footer
