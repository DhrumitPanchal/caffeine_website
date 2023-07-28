import React from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";


function Navebar() {
  return (



<div className='flex justify-between items-center border-[.1rem] border-white max-sm:px-[2rem] px-[1.2rem]'>
  <h1 className='cursor-pointer max-sm:text-[3rem] text-[2.5rem] font-fonts'>Caffeine</h1>
  <ul className='list-none font-sans text-[1.2rem] max-sm:hidden'>
    <li className='inline-block mx-[1rem]'><a href="#home" className=''>Home</a></li>
    <li className='inline-block mx-[1rem]'><a href="#about" className=''>About Us</a></li>
    <li className='inline-block mx-[1rem]'><a href="#menu" className=''>Menu</a></li>
    <li className='inline-block mx-[1rem]'><a href="#" className=''>Facilities</a></li>
  </ul>
  <div>
    <div className=' flex gap-[.6rem] max-sm:hidden'>
    <h1 className='cursor-pointer border-r-[.1rem] border-white text-[1.2rem] pr-[.7rem]'>Sign In</h1>
    <HiMagnifyingGlass className='cursor-pointer text-[1.7rem]'/>
    </div>
  </div>
</div>
  )
}

export default Navebar
