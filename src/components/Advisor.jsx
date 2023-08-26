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
    desc: 'IIT Madras'
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
    <div>
      <h1 className='py-10 text-center bg-text text-4xl font-medium'>
        Mentor and Advisor
      </h1>
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      
      <div className='flex justify-around'>
        {
          mentors.map((item)=>(
            <SwiperSlide>
             <div className='flex flex-col justify-center items-center'>
           <img src={mentor} alt=''/>
           <p>{item.Name}</p>
           <p>{item.Title}</p>
           <p>{item.desc}</p>
           <button className='bg-slate-200 rounded-3xl my-2'>{item.button}</button>
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