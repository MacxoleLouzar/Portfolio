import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5> What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>HTMl</h4>
                  <small className='text-light'>experienced</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>HTMl</h4>
                  <small className='text-light'>experienced</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>HTMl</h4>
                  <small className='text-light'>experienced</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>HTMl</h4>
                  <small className='text-light'>experienced</small>
                </div>
            </article>
          </div>
        </div>


        <div className='experience_backend'>
        <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>HTMl</h4>
                  <small className='text-light'>experienced</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>HTMl</h4>
                  <small className='text-light'>experienced</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>HTMl</h4>
                  <small className='text-light'>experienced</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>HTMl</h4>
                  <small className='text-light'>experienced</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience