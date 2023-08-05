import React,{useState} from 'react';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaBars,FaXmark } from "react-icons/fa6";

function Navebar() {
  
const [openmenu,setOpenmenu] = useState(false)

  return (
  
    <div className="flex justify-between items-center border-[.1rem] border-white max-sm:px-[2rem] px-[1.2rem] text-white">
      <h1 className="cursor-pointer max-sm:text-[3rem] text-[2.5rem] font-fonts">
        Caffeine
      </h1>
      <div className={`${openmenu ? "max-sm:left-0" : "max-sm:-left-[100%]"} max-sm:fixed flex max-sm:flex-col max-sm:gap-[8rem] max-sm:py-[17rem] items-center max-sm:justify-normal justify-between max-sm:h-screen max-sm:w-[100%] max-sm:top-0  max-sm:bg-[#ddb288] w-[61.5%] max-sm:text-[#1b1107] ease-linear transition-all duration-300`}>
      <div className="cursor-pointer text-[5.5rem] font-fonts max-sm:block hidden border-b-[1px] border-[#1b1107]">Caffeine</div>
      <FaXmark  onClick={() => setOpenmenu(!openmenu)} className="max-sm:block max-sm:absolute m-[2rem] top-0 right-0 hidden text-[3.5rem]" />
      <ul className=" list-none font-sans text-[1.2rem] max-sm:text-[5rem] max-sm:flex flex-col items-center">
        <li className="inline-block mx-[1rem]">
          <a href="#home" onClick={() => setOpenmenu(!openmenu)} className="">
            Home
          </a>
        </li>
        <li className="inline-block mx-[1rem]">
          <a href="#about" onClick={() => setOpenmenu(!openmenu)}>
            About Us
          </a>
        </li>
        <li className="inline-block mx-[1rem]">
          <a href="#menu" onClick={() => setOpenmenu(!openmenu)}>
            Menu
          </a>
        </li>
        <li className="inline-block mx-[1rem]">
          <a href="#contect" onClick={() => setOpenmenu(!openmenu)}>
            Contect
          </a>
        </li>
        <li className="inline-block mx-[1rem] max-sm:block hidden">
          <a href="#home" onClick={() => setOpenmenu(!openmenu)}>
            Order
          </a>
        </li>
      </ul>
      <div className='max-sm:hidden block'>
        <div className=" flex gap-[.6rem]">
          <h1 className="cursor-pointer border-r-[.1rem] border-white text-[1.2rem] pr-[.7rem]">
            Sign In
          </h1>
          <HiMagnifyingGlass className="cursor-pointer text-[1.7rem]" />
        </div>
        </div>
      </div>
      <FaBars onClick={() => setOpenmenu(!openmenu)} className="max-sm:block hidden text-[2.5rem]" />
    </div>
  )}
export default Navebar;







