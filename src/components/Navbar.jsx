// import React, { useState } from 'react'
// import logo from '../assets/logo-sciastra.webp'
// import menu from '../assets/burger-menu.png'
// import close from '../assets/close.png'

// const Navbar = () => {
//   const [open, setOpen]=useState(false);

//   return (
//     <div className='flex justify-between px-6 xl:px-10 2xl:px-20 py-2'> 
   
//         <img src={logo} alt='' className='w-[30px] h-[30px] md:h-[70px] md:w-[70px] rounded-full'></img>
//         <div className=''>
//           {/* <img src={menu} alt='' className='w-8 lg:hidden' /> */}
//           {!open ? (
//         <img src={menu} alt="" className='lg:hidden' width={20} height={20} onClick={()=>setOpen(true)}/>
//         ): (
//             <img src={close} alt='' width={20} height={20} onClick={()=>setOpen(false)}/>
//         )
// }
//           {open && (
           
//             <ul className='lg:flex py-6'>
//                <div className='absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex items-center flex-col justify-center gap-8 z-10 bg-white lg:flex lg:flex-row'>
//                 <li className=' xl:pr-12'>Home</li>
//                 <li className=' xl:px-12'>Courses</li>
//                 <li className=' xl:px-12'>Selection</li>
//                 <li className=' xl:px-12'>Blogs</li>
//                 <li className=' xl:px-12'>Materials</li>
//                 <li className=' xl:px-12'>Team</li>
//                 <li className=' xl:px-12'>Contact Us</li>
//                 <button className='xl:mr-32 bg-button rounded-3xl text-white text-xs px-1'>Log in</button>
//                 </div>
//             </ul>
           
//            ) }
//         </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import logo from '../assets/logo-sciastra.webp';
import menu from '../assets/burger-menu.png';
import close from '../assets/close.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex justify-between px-6 lg:px-10 2xl:px-20 py-2'> 
      <img src={logo} alt='' className='w-[30px] h-[30px] md:h-[70px] md:w-[70px] rounded-full' />

      <div className='lg:hidden'>
        <img src={open ? close : menu} alt='' width={20} height={20} onClick={() => setOpen(!open)} />
      </div>

      <ul className={`lg:flex ${open ? 'py-6 absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex items-center flex-col justify-center gap-8 z-10 bg-white' :'hidden'}`}>
        <li className='lg:pr-4 xl:pr-12'>Home</li>
        <li className='lg:px-4 xl:px-12'>Courses</li>
        <li className='lg:px-4 xl:px-12'>Selection</li>
        <li className='lg:px-4 xl:px-12'>Blogs</li>
        <li className='lg:px-4 xl:px-12'>Materials</li>
        <li className='lg:px-4 xl:px-12'>Team</li>
        <li className='lg:px-4 xl:px-12'>Contact Us</li>
      </ul>
    </div>
  );
}

export default Navbar;
