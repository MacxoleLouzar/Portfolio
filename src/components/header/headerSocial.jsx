import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaGitlab} from 'react-icons/fa'

const headerSocial = () => {
  return (
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/masixole-mtsikini-0538a5119/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/MacxoleLouzar' target="_blank"><BsGithub/></a>
        <a href='https://gitlab.com' target="_blank"><FaGitlab/></a>
    </div>
  )
}

export default headerSocial