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
                <h3>Backend </h3>
              </div>
              <ul className='service_list'>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Lorem ipsum dolor sit amet luptate expedita placeat ad voluptatum adipisci veniam. Voluptatem itaque saepe ?</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Lorem ipsum dolor sit amet luptate expedita placeat ad voluptatum adipisci veniam. Voluptatem itaque saepe?</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Lorem ipsum dolor sit amet luptate expedita placeat ad voluptatum adipisci veniam. Voluptatem itaque saepe?</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Lorem ipsum dolor sit amet luptate expedita placeat ad voluptatum adipisci veniam. Voluptatem itaque saepe?</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Lorem ipsum dolor sit amet luptate expedita placeat ad voluptatum adipisci veniam. Voluptatem itaque saepe?</p>
                </li>
              </ul>
            </article>


            <article className='service'>
              <div className='service_head'>
                <h3>Frontend</h3>
              </div>
              <ul className='service_list'>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Lorem ipsum dolor sit amet luptate expedita placeat ad voluptatum adipisci veniam. Voluptatem itaque saepe ?</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Lorem ipsum dolor sit amet luptate expedita placeat ad voluptatum adipisci veniam. Voluptatem itaque saepe?</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Lorem ipsum dolor sit amet luptate expedita placeat ad voluptatum adipisci veniam. Voluptatem itaque saepe?</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Lorem ipsum dolor sit amet luptate expedita placeat ad voluptatum adipisci veniam. Voluptatem itaque saepe?</p>
                </li>
                <li>
                  <TbCSharp className='service_link-icon'/>
                  <p>Lorem ipsum dolor sit amet luptate expedita placeat ad voluptatum adipisci veniam. Voluptatem itaque saepe?</p>
                </li>
              </ul>
            </article>
        </div>
    </section>
  )
}

export default service