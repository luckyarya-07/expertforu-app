import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
          </ul>

        </article>
        {/* END  OF UX/UI */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
          </ul>

        </article>

        {/* END  OF Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li>
          </ul>

        </article>

      </div>
    </section>
  )
}

export default Services