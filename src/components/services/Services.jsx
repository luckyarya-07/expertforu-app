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
            <h3>Website Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list_icon'/>
              Responsive Website 
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              WordPress Website Design
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              React App Design
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              UX/UI 
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Figma to HTML5
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Sketch to HTML5
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              One Page Website Design
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
              WordPress Website 
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Customization 
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Woocommerce Customization
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Plugins
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Shopify
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Wix
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              React Web App
            </li>
          </ul>

        </article>

        {/* END  OF Web Development */}
        <article className='service'>
          <div className="service__head">
            <h3>Marketing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list_icon'/>
              Email Marketing
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Whatsapp Bulk Message
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Bulk SMS Marketing
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Social Media Marketing 
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              Search Engine Optimization
            </li>
            {/* <li>
              <BiCheck className='service__list_icon'/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, in?
            </li> */}
          </ul>

        </article>

      </div>
    </section>
  )
}

export default Services