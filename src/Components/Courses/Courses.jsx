import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import logo from '../Home/logo.svg'
const Courses = () => {


  return (
    <section className="courses" id='courses'>
        <h1 className="heading">our <span>courses</span></h1>
        <div className="swiper course-slider">
            <Swiper
           modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={50}
           slidesPerView={3}
           navigation
           pagination={{ clickable: true }}
           
           onSwiper={(swiper) => console.log(swiper)}
           onSlideChange={() => console.log('slide change')}
            >
            <div className="swiper-wrapper">
                <SwiperSlide>
                <div className="swiper-slide slide">
                    <img src={logo} alt="" />
                    <h3>web development</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores?</p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="swiper-slide slide">
                    <img src={logo} alt="" />
                    <h3>digital marketing</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores?</p>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="swiper-slide slide">
                    <img src={logo} alt="" />
                    <h3>science and biology</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores?</p>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="swiper-slide slide">
                    <img src={logo} alt="" />
                    <h3>graphic design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores?</p>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="swiper-slide slide">
                    <img src={logo} alt="" />
                    <h3>teaching</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores?</p>
                </div>
                </SwiperSlide>
                 <SwiperSlide>
                <div className="swiper-slide slide">
                    <img src={logo} alt="" />
                    <h3>engneering</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores?</p>
                </div>
                </SwiperSlide>
            </div>
            </Swiper>
            <div className="swiper-pagination"></div>
        </div>
    </section>
  )
}

export default Courses
