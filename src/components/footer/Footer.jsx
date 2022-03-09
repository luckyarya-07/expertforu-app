import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Lucky Arya</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li> 
        <li><a href="#about">About</a></li>  
        <li><a href="#experience">Experience</a></li> 
        <li><a href="#services">Services</a></li> 
        <li><a href="#portfolio">Portfolio</a></li> 
        <li><a href="#testimonial">Testimonials</a></li> 
      </ul>

      <div className="footer__socials">
        <a href="#"><FaFacebook/></a>
        <a href="#"><FiInstagram/></a>
        <a href="#"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Lucky Arya All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer