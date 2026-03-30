import { FaBeer } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Nigerianlogo from './assets/Nigerianlogo.png'
import { IoIosArrowUp } from "react-icons/io";

export default function Button2() {
  return (

    <div className="flex justify-between md:space-x-4 space-x-0 bg-[#F7F7FB] rounded-full md:px-6 px-1 py-2 items-center"> 
<div className="flex space-x-2 items-center">
 <img className="h-4 md:w-5 w-6 ml-2 md:ml-0" src={Nigerianlogo} alt="Nigerialogo" /> 
 <span className="text-[14px] hidden md:block">Nigeria</span>  
</div>
<div className="hidden md:block"><MdOutlineKeyboardArrowDown /></div>
<div className=" h-2 w-2 md:h-0 md:w-0 mb-2 md:mb-0 mr-2 md:mr-0 md:hidden"><IoIosArrowUp /></div>
    </div>
    
)
}