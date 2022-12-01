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
          <h3>DevOps</h3>
          <div className='experience_content'>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>Daviare (Remotely)</h4>
                  <h5 className='text-light'>November 2020 - July 2021</h5>
                  <small className='text-light'>DevOps Engineer Learnership</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>Code4Kids (Remotely)</h4>
                  <h5 className='text-light'>June 2021 - August 2021</h5>
                  <small className='text-light'>DevOps Engineer Apprenticeship </small>
                </div>
            </article>
           
          </div>
        </div>

        <div className='experience_backend'>
        <h3>Software Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>Dynamic DNA</h4>
                  <h5 className='text-light'>March 2020 - November 2020</h5>
                  <small className='text-light'>System Developer Trainee</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>LSL Auction (Remotely)</h4>
                  <h5 className='text-light'>September 2021 - November 2021</h5>
                  <small className='text-light'>C# Developer</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>CXI-AFRICA</h4>
                  <h5 className='text-light'>February 2022 - May 2022</h5>
                  <small className='text-light'>C# XR, VR Developer Learnership</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsFillPatchCheckFill className='experience_details_icon'/>
                <div>
                  <h4>Digital Academy</h4>
                  <h5 className='text-light'>September 2022 - current</h5>
                  <small className='text-light'>Full-Stack Developer Intern</small>
                </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience