import React from 'react'
import './portfolio'
import IMG1 from '../../asserts/project.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'The project I have done',
    github: 'https://github.com/MacxoleLouzar',
    demo: 'http://gitlab.com'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Projects</h2>

        <div className='container project_container'>
         {
           data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className='project_item'>
              <div className='project_item-image'>
                <img src={image} alt=""/>
              </div>
              <h3>Check all my project here!</h3>
              <div className='project_item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>GitLab</a>
              </div>
            </article>
            )
           })
         }
        </div>
    </section>
  )
}

export default portfolio