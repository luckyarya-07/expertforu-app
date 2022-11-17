import React from 'react'
import './about.css'
import Me from '../../assets/ab-me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt='me' height='380'/>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>+5 years working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>25+ Client Worldwise</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>100+</small>
              </article>
            </div>

            <p>
            As a professional WordPress Developer and Web Designer, 
            I am always striving to provide the best possible service to my clients. 
            Reviews and client satisfaction are my main objectives, and 
            I will not stop working until you are satisfied. 
            Let's work together! I can deliver very fast, guaranteed high-quality service.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>  

          </div>
      </div>
    </section>
  )
}

export default About