import React from 'react'
import {FaLinkedin} from "react-icons/fa/"
import {AiOutlineGithub} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"

const headerSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com' target='_blank'><AiOutlineGithub /></a>
        <a href='https://facebook.com' target='_blank'><AiFillFacebook /></a>
    </div>
  )
}

export default headerSocial