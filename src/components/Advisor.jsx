import React from 'react'
import mentor from '../assets/user-6-line.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Advisor = () => {
  const mentors=[{
    Name: 'Dr. Omkar',
    Title: 'Principal Project Scientist',
    desc: 'IIT Madras',
    button: 'Message him now'
  },
  {
    Name: 'Akhil Tripathi',
    button: 'Message him now'
  },
{
Name: 'Vivek Dwivedi',
button: 'Message him now'
}]
  return (
    <div className='px-5'>
      <h1 className='text-3xl font-bold py-10 text-center bg-text xl:text-4xl'>
        Mentor and Advisor
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
          
         }}
        loop={false}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      
      <div className='flex'>
        {
          mentors.map((item)=>(
            <SwiperSlide>
             <div className='flex flex-col justify-center items-center text-[#234EB0]'>
           <img src={mentor} alt='' className='pb-2 xl:w-9'/>
           <p>{item.Name}</p>
           <p>{item.Title}</p>
           <p className='pb-3'>{item.desc}</p>
         <div className='bg-button rounded-3xl'>
           <button className='rounded-3xl my-0.5 mx-0.5 py-2 px-1 font-medium bg-white'>{item.button}</button>
           </div>
           </div>
    
          </SwiperSlide>
          ))
        
}
</div>
</Swiper>
    </div>
  )
}

export default Advisor