import React from 'react'
import './education.css'
import 'boxicons'

const education = () => {
  return (
    <section className='qualification section'>
      <h5> My personal journey</h5>
      <h2 className='swction_title'> Qaulification </h2>
      <div className='qualification_container container'>
        <div className='qaulification_tabs'>
          <div className='qaulification_button qaulification_active button--flex'>
            <i className='uil uil-graduation-cap qaulification_icon'></i> Education
          </div>
          <div className='qaulification_button button--flex'>
            <i className='uil uil-graduation-cap qaulification_icon'></i> Certificate
          </div>
        </div>

         <div className='qualification_section'>
          <div className='qualification_content qualification_content-active'>
          <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>Matric / G.12</h3>
                <span className='qaulification_subtitle'>Attwell Madala High School</span>
                <div className='qaulification_calender'>
                  <i className='uil uil-calender-alt'></i> 2010 - 2013
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qaulification_line'></span>
              </div>
            </div>
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>National Diploma: IT</h3>
                <span className='qaulification_subtitle'>Durban University Of technology</span>
                <div className='qaulification_calender'>
                  <i className='uil uil-calender-alt'></i> 2014 - 2017
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qaulification_line'></span>
              </div>
            </div>

            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qaulification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>BTECH: IT</h3>
                <span className='qaulification_subtitle'>Durban University Of technology</span>
                <div className='qaulification_calender'>
                  <i className='uil uil-calender-alt'></i> 2018 - 2019
                </div>
              </div>
             
            </div>

          </div>

          <div className='qualification_content qualification_content-active'>
          <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>IT support Certification</h3>
                <span className='qaulification_subtitle'>Masithuthuke Holdings</span>
                <div className='qaulification_calender'>
                  <i className='uil uil-calender-alt'></i> April 2018 - February 2019
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qaulification_line'></span>
              </div>
            </div>
            <div className='qualification_data'>
              <div>
                <h3 className='qualification_title'>DevOps Certification</h3>
                <span className='qaulification_subtitle'>Deviare</span>
                <div className='qaulification_calender'>
                  <i className='uil uil-calender-alt'></i> July 2020 -  November 2020
                </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qaulification_line'></span>
              </div>
            </div>

            <div className='qualification_data'>
              <div></div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qaulification_line'></span>
              </div>
              <div>
                <h3 className='qualification_title'>Data Analyst & powerBI</h3>
                <span className='qaulification_subtitle'>Deviare</span>
                <div className='qaulification_calender'>
                  <i className='uil uil-calender-alt'></i> September 2022 - December 2022
                </div>
              </div>
             
            </div>

          </div>
         </div>

      </div>
    </section>
  )
}

export default education