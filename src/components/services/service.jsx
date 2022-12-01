import React from 'react'
import './service.css'
import {TbCSharp} from 'react-icons/tb'

const service = () => {
  return (
    <section id='service'>
        <h5>What I work with</h5>
        <h2>My Skills</h2>

        <div className='container services_container'>
            <article className='service'>
              <div className='service_head'>
                <h3>Technical Skills </h3>
              </div>
              <ul className='service_list'>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>ASP.NET C#</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>MS SQL</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Postgres SQL</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>MySQL</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>NODE.JS</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>JAVA</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>ANGULARJS 2</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>BOOTSTRAP</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>DOCKER</p>
                </li>
              </ul>
            </article>


            <article className='service'>
              <div className='service_head'>
                <h3>Soft Skills</h3>
              </div>
              <ul className='service_list'>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>DISCIPLINED AND FOCUSED</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>FLEXIBLE AND VERSATILE</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>RESOURCEFUL</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>LOYAL AND TRUSTWORTHY</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p> COLLABORATIVE</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>  DETAIL ORIENTATED AND ATTENTIVE</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p> CREATIVE AND INNOVATIVE</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p> FAST LEARNER WHO IS ALWAYS SEEKING TO IMPROVE</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p> PASSIONATE AND COMMITTED</p>
                </li>
              </ul>
            </article>
        </div>
    </section>
  )
}

export default service