import React from 'react'
import './reference.css'
import avatar1 from '../../asserts/avatar1.jpg'
import avatar2 from '../../asserts/avatar2.jpg'
import avatar3 from '../../asserts/avatar3.jpg'

// import Swiper core and required modules
 import { Pagination, Navigation } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import "swiper/css/navigation";


import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/controller/controller.min.css'
import 'swiper/components/navigation/navigation.min.css'

const data = [
  {
    avatar: avatar1,
    name: "Yonela Mtsikini",
    cell: "078 562 8891",
    reference_review: 'aymtisikini@yahoo.com'
  },
  {
    avatar: avatar2,
    name: "Thabiso Jali",
    cell: "065 012 7911",
    reference_review: 'Jali45@gmail.com'
  },
  {
    avatar: avatar3,
    name: "Buhle Singo",
    cell: "060 559 1241",
    reference_review: 'tinasingo@gmail.com'
  }
]

const reference = () => {
  return (
    
    <section id='reference'>
      <h5>People who know me</h5>
      <h2>References</h2>

      <Swiper className='container reference_container' 
      
        // install Swiper modules
        modules={[Pagination, Navigation]} 
        spaceBetween={50}
        slidesPerView={1}
        navigation={{clickable: true}} 
        pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, cell, reference_review}, index)=>(
          <SwiperSlide key={index} className='references'>
          <div className='avatar'>
            <img src={avatar} alt="Avatar One"/>
            </div>
            <h5 className='name'>{name}</h5>
            <h5>{cell}</h5>
            <small className='reference_review'>
             {reference_review}
            </small>
        </SwiperSlide>
        ))
      }
      </Swiper>
    </section>
  )
}
export default reference