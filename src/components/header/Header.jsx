import React from 'react'
import './header.css'
import CAT from './CAT'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/meOrignal.png'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Lucky Arya</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CAT/>
        <HeaderSocial />
        <div className="me">
           <img src={ME} alt='me'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header