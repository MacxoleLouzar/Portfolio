import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {SiAboutdotme} from 'react-icons/si'
import {MdOutlineContactMail} from 'react-icons/md'
import {GrServices} from 'react-icons/gr'
import {MdWorkOff} from 'react-icons/md'
import {MdCastForEducation} from 'react-icons/md'
import {VscReferences} from 'react-icons/vsc'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav=== '#' ? 'active':''}><FaHome/></a>

      <a href='#about' onClick={()=>setActiveNav('#about' ? 'active':'')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href='#contact'onClick={()=>setActiveNav('#contact' ? 'active':'')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail/></a>
      <a href='#service'onClick={()=>setActiveNav('#service' ? 'active':'')} className={activeNav === '#service' ? 'active' : ''}><GrServices/></a>
      <a href='#experience'onClick={()=>setActiveNav('#experience' ? 'active':'')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOff/></a>
      <a href='#education'onClick={()=>setActiveNav('#education' ? 'active':'')} className={activeNav === '#education' ? 'active' : ''}><MdCastForEducation/></a>
      <a href='#reference'onClick={()=>setActiveNav('#reference' ? 'active':'')} className={activeNav === '#reference' ? 'active' : ''}><VscReferences/></a>
    </nav>
  )
}

export default Nav