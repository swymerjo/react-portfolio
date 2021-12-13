import React from 'react'
import "./Footer.css";

function Footer() {
    return (
        <div className='footer'>
         <section className='footer-contact'>
          <h2>For work enquiries, contact me:</h2> 
          <h3>sammyjowymerpsych@gmail.com</h3> 
        </section>
        <section className='footer-social-icons'>
        <i class='fab fa-twitter social-icons' />    
        <i class='fab fa-github social-icons' />    
        <i class='fab fa-linkedin social-icons' />    
        <i class='fab fa-instagram social-icons' />     
        </section>
        </div>
    )
}

export default Footer
