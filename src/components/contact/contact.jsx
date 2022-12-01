import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

         <div className="container contact_container">
             <div className="contact_options">
                 <article className="contact_option">
                  <TfiEmail className='contact_option-icon'/>
                      <h4>Email</h4>
                      <h5>louzaarr@gmail.com</h5>
                      <a href='mailto:macxolelouzaar@gmail.com' target="_blank">Send me message</a>
                 </article> 

                 <article className="contact_option">
                  <BsLinkedin className='contact_option-icon'/>
                      <h4>LinkedIn</h4>
                      <h5>Masixole Mtsikini</h5>
                      <a href='https://www.linkedin.com/in/masixole-mtsikini-0538a5119/' target="_blank">Send me message</a>
                 </article> 

                 <article className="contact_option">
                  <BsWhatsapp className='contact_option-icon'/>
                      <h4>WhatsApp</h4>
                      <h5>+27(0)65 613 7526</h5>
                      <a href='https://api.whatsapp.com/send?phone+27656137526' target="_blank">Send me message</a>
                 </article> 

             </div>
             <form action="">
                <input type="text" name='name' placeholder='Enter Your Full Name' required/>
                <input type="text" name='email' placeholder='Enter Your Email' required/>
                <textarea name='message' rows="7" placeholder='Your message' required/>
                <button type='submit' className='btn btn-primary'>Send Message</button>
             </form>
         </div>
    </section>
  )
}

export default contact