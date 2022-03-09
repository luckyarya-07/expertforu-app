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
                <small>+4 years working</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>25+ Client Worldwise</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>50+</small>
              </article>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium, velit provident quae temporibus labore tempore delectus. Accusantium facere ipsa est facilis voluptatem ab minima itaque et? Necessitatibus, dicta provident.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>  

          </div>
      </div>
    </section>
  )
}

export default About