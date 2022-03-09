import React from 'react'
import './testimonial.css'
import Avatar1 from '../../assets/avatar1.png'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.png'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
// import 'swiper/css/pagination';



const data = [
  {
    avatar: Avatar1,
    name: 'Client Name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquid explicabo reprehenderit cum unde provident at adipisci accusantium cumque earum qui a deserunt alias debitis animi error architecto minus culpa.'
  },
  {
    avatar: Avatar2,
    name: 'Client Name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquid explicabo reprehenderit cum unde provident at adipisci accusantium cumque earum qui a deserunt alias debitis animi error architecto minus culpa.'
  },
  {
    avatar: Avatar3,
    name: 'Client Name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquid explicabo reprehenderit cum unde provident at adipisci accusantium cumque earum qui a deserunt alias debitis animi error architecto minus culpa.'
  },
  {
    avatar: Avatar4,
    name: 'Client Name',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquid explicabo reprehenderit cum unde provident at adipisci accusantium cumque earum qui a deserunt alias debitis animi error architecto minus culpa.'
  },
]

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={avatar} alt="Avatar" />
                  </div>
                    <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }   
      </Swiper>
    </section>
  )
}

export default Testimonial