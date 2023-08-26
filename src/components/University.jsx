import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
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
    <div className='px-5  lg:px-24'>
      <h1 className='bg-text text-2xl lg:text-4xl text-center font-bold xl:px-64 pt-10 pb-6 lg:py-20 md:px-24'>
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
        <div>
        <div className=' px-24'>
        
          {colleges.map((item)=>(
           <SwiperSlide> <div className='px-4 py-14 rounded-lg  bg-slate-50 text-[#234EB0] text-xl font-medium shadow-xl mx-3 my-4 text-center'>
              {item.college}</div>  </SwiperSlide>
            ))}
          
        </div>
        </div>
        </Swiper>
    </div>
  )
}

export default University