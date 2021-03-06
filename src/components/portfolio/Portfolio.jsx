import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/m1.jpg'
import IMG2 from '../../assets/m2.png'
import IMG3 from '../../assets/m3.png'
import IMG4 from '../../assets/m4.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Project title',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Project title',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Project title',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project title',
    github: 'https://github.com',
    demo: '#'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

      {data.map (({id, image, title, github, demo}) => {
        return (
        <article className="portfolio__item" key={id}>
          <div className="portfolio__item-image">
             <img src={image} alt="m1" />
          </div>
          <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Go Live</a>
            </div>
        </article>
        )
      })
      }

      </div>
    </section>
  )
}

export default Portfolio