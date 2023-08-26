import React from 'react'
import logo from '../assets/logo-sciastra.webp'
import menu from '../assets/burger-menu.png'

const Navbar = () => {
  return (
    <div className='flex justify-between px-6 xl:px-10 2xl:px-20 py-2'> 
        <img src={logo} alt='' className='w-[70px] rounded-full'></img>
        <div className=''>
          <img src={menu} alt='' className='w-8 lg:hidden' />
            <ul className='lg:flex py-6 hidden lg:visible'>
                <li className='pr-6 xl:pr-12'>Home</li>
                <li className='px-6 xl:px-12'>Courses</li>
                <li className='px-6 xl:px-12'>Selection</li>
                <li className='px-6 xl:px-12'>Blogs</li>
                <li className='px-6 xl:px-12'>Materials</li>
                <li className='px-6 xl:px-12'>Team</li>
                <li className='px-6 xl:px-12'>Contact Us</li>
                <button className='xl:mr-32 bg-button rounded-3xl text-white text-xs px-1'>Log in</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar