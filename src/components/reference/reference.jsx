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
    reference_review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi dolorum!'
  },
  {
    avatar: avatar2,
    name: "Thabiso Jali",
    reference_review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi dolorum!'
  },
  {
    avatar: avatar3,
    name: "Buhle Singo",
    reference_review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eligendi dolorum!'
  }
]

const reference = () => {
  return (
    
    <section id='reference'>
      <h5> Review from people</h5>
      <h2>References</h2>

      <Swiper className='container reference_container' 
      
        // install Swiper modules
        modules={[Pagination, Navigation]} 
        spaceBetween={50}
        slidesPerView={1}
        navigation={{clickable: true}} 
        pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, reference_review}, index)=>(
          <SwiperSlide key={index} className='references'>
          <div className='avatar'>
            <img src={avatar} alt="Avatar One"/>
            </div>
            <h5 className='name'>{name}</h5>
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