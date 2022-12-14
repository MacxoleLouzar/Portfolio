import React from 'react'
import './about.css'
import Me from '../../asserts/me2.png'
import {FaAward} from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 bold>About me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={Me} alt="about image"/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working including learner-ships</small>
            </article>
           
            <article className='about_card'>
              <VscProject className='about_icon'/>
              <h5>Projects</h5>
              <small>4+ On my github</small>
            </article>
          </div>
          <p>
          I am a loyal dedicated person and have proven to be competent and reliable in any situation, I
           particularly enjoy working with people daily. I am a fast learner and I adapt easy. I take part
           in everything I do and always strive for perfection in working environment.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about