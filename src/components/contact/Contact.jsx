import React, { useState } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [disableBtn , SetDisableBtn] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_muq3g6e', 'template_cdypy6s', form.current, 'cwpjmnbaFg9dNiARS')
      .then((result) => {
          console.log(result.text);
          SetDisableBtn(true);
          toast.success('Message Send Successfully')
      }, (error) => {
          console.log(error.text);
          SetDisableBtn(false);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touchsdfdf</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
             <MdOutlineEmail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>example@gmail.com</h5>
             <a href="mailto:example@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
             <RiMessengerLine className='contact__option-icon'/>
             <h4>Messenger</h4>
             <h5>awesomewebsolution</h5>
             <a href="https://m.me/ernest.achiever">Send a message</a>
          </article>

          <article className="contact__option">
             <BsWhatsapp className='contact__option-icon'/>
             <h4>Whatsapp</h4>
             <h5>+91 9459552702</h5>
             <a href="https://api.whatsapp.com/send?phone+919459552702">Send a message</a>
          </article>

        </div>
                  {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="name" placeholder='Your Full Name' required/>
            <input type="email" name="email" id="email" placeholder='Your Email Address' required/>
            <textarea name="message" id="message"  rows="4" required></textarea>
            <button type="submit"  className='btn btn-primary' disabled={disableBtn}>{disableBtn ? 'Message Send ' : 'Send Message'}</button>
          </form>
          <ToastContainer />
      </div>
    </section>
  )
}

export default Contact