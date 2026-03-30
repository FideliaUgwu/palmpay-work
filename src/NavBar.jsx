import palmpaylogo from './assets/palmpaylogo.png' 
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
import Button2 from './Button2'
import { TfiLineDouble } from "react-icons/tfi";

function NavBar() {

  return (
  <div className='flex justify-around md:h-20 h-15 items-center bg-white md:px-4 px-0 fixed z-40 w-full overflow-x-hidden'> {/* This is NavBar */}

    <div className='flex' > {/* Left side */}

      <div>
       <img className='md:h-8 h-6 md:w-32 w-25 mr-20 md:mr-0' src={palmpaylogo} alt="Logo" /> 
      </div>
   
   
    </div>

    <div className='text-[18px] font-semibold  hidden md:flex gap-15 justify-around'> {/* middle div side */}
  <NavLink to="/company">Company</NavLink>
  <NavLink to="/contact">Personal</NavLink>
  <NavLink to="/about">Business</NavLink>
  <NavLink to="/services">Impact</NavLink>
  <NavLink to="/blog">Newsroom</NavLink>
</div>

    <div className='flex justify-around gap-8'> {/* last div side */}
      <div className='hidden md:block'>
        <Button/>
      </div>

      <div className='ml-15 md:ml-0'>
        <Button2/>
      </div>


     </div>

<div className='md:hidden'><TfiLineDouble size={30} strokeWidth={0.5} style={{ letterSpacing: '12px' }} /></div>
    

  </div>
  )
}

export default NavBar