import React from 'react';
import './testimonial.css';
import AVT from '../../assets/avt.png';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVT,
    name: 'ABC XYZ',
    review: 'Testimonial - 1',
  },
  {
    avatar: AVT,
    name: 'ABC XYZ',
    review: 'Testimonial - 2',
  },
  {
    avatar: AVT,
    name: 'ABC XYZ',
    review: 'Testimonial - 3',
  },
  {
    avatar: AVT,
    name: 'ABC XYZ',
    review: 'Testimonial - 4',
  },
];

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__img'>
                <img src={avatar} alt='avtar1' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
