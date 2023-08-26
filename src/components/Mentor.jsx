import React from 'react'
import contact from '../assets/user-fill.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Mentor = () => {
  const users=[{
    Name: 'Shubham Jain',
    University: 'NISER'
  },
{
Name: 'Piyush Verma',
University: 'IISER Pune',
},
{
  Name: 'Aditya Nayak',
  University: 'IISER Mohali'
},
{
  Name: 'Tanmay',
  University: 'NISER'
},
{
  Name: 'Veena Sri',
  University: 'HBTU Kanpur'
},
{
  Name: 'Mandar Tarnekar',
  University: 'GMC Dhule'
},
{
  Name: 'Sehasree Mohanta',
  University: 'IACS'
},
{
  Name: 'Ripunjay',
  University: 'CMI'
},
{
  Name: 'Parth Kumar',
  University: 'IIT Jodhpur'
},
{
  Name: 'Saumya Prakash',
  University: 'NISER'
},
{
  Name: 'Saumya Shisodiya',
  University: 'HBTU Kanpur'
},
{
  Name: 'Tiasha Das',
  University: 'IISER Berhampur'
},
]
  return (
    <div className='lg:px-20 px-5'>
      <h1 className='text-center py-20 text-3xl font-bold xl:text-4xl bg-text'>
        Meet your Mentors
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
      
      <div className='grid grid-cols-4 justify-center items-center py-10'>
        { users.map((item)=>(
          <SwiperSlide><div>
        <div className='flex flex-col justify-center items-center py-4'>
        <img src={contact} className='border-black border-2 rounded-full my-4'></img>
        <h2 className='text-center text-[#234EB0]'>{item.Name}<br></br>{item.University}</h2>
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

export default Mentor