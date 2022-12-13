import React from 'react'
import './contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const notify = ()=>toast("👍 Succesfully Submitted");
 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs.sendForm('service_v9ddgwr', 'template_a47b8ke', form.current, 'aIDNWp6pgod2D5lvF')
    emailjs.sendForm('service_xla8wx4', 'template_cosuei4', form.current, 'VSo58ah6pGcyUsJac')
      .then((result) => {
          console.log(result.text);

      }, (error) => {
          console.log(error.text);
      });
     e.target.reset()
  };


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
             
             <form ref={form} onSubmit={sendEmail}>
                <input type="text" name= 'name' placeholder='Your Full Name' required />
                <input type="email" name= 'email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                <button onClick={notify} type="submit" className='btn btn-primary'>Send Message</button>
                <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                />
                </form>
          </div>
   </section>
  )
}

export default Contact