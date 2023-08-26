import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const University = () => {
  const colleges=[
    {
    college: 'Cambridge University, UK'
  },
  {
    college: 'Cambridge University, UK'
  },
  {
    college: 'Cambridge University, UK'
  },
  {
    college: 'Cambridge University, UK'
  },
  {
    college: 'Cambridge University, UK'
  },
  {
    college: 'Cambridge University, UK'
  },
  {
    college: 'Cambridge University, UK'
  },
  {
    college: 'Cambridge University, UK'
  },
  {
    college: 'Cambridge University, UK'
  },
  {
    college: 'Cambridge University, UK'
  },
  {
    college: 'Cambridge University, UK'
  },
]
  return (
    <div>
      <h1 className='bg-text text-xl lg:text-4xl text-center font-bold lg:px-64 pt-10 pb-6 lg:py-20'>
            Learn from the Scientist, Research Scholars from the top universities in the world.
        </h1>
   <Swiper
   slidesPerView={1}
   spaceBetween={30}
   breakpoints={{
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
   }}
   loop={true}
  
   navigation={true}
   modules={[Pagination, Navigation]}
   className="mySwiper"
    >
        
        <div className=' px-20 text-center'>
        
          {colleges.map((item)=>(
           <SwiperSlide> <div className='px-6 py-14 rounded-lg  bg-slate-50 text-[#234EB0] text-xl font-medium shadow-xl mx-8  my-4 text-center'>
              {item.college}</div>  </SwiperSlide>
            ))}
          
        </div>
        </Swiper>
    </div>
  )
}

export default University