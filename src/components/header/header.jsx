import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../asserts/me-.png'
import HeaderSocial from './headerSocial'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5><b>Hello World</b> I'm </h5>
        <h1>Masixole Mtsikini</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className='me'>
          <img src={Me} alt='me'/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default header