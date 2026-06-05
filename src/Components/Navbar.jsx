import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState (false);
  return (
    <nav className='bg-transparent w-full h-[6rem] fixed backdrop-blur-2xl'>

<div className='max-w-[80%] mx-auto h-20 justify-between items-center text-white flex'>

    {/* Logo  */}
<div>
<h1 className='text-[#7b2cbf] font-bold text-2xl'>PORTFOLIO..</h1>

</div>

{/* Nav links  */}

<ul className='flex gap-7 hidden lg:flex'>
    <li className=' font-medium text-lg hover:border-b-2 hover:border-[#7b2cbf] '>
        <a href="#">Home</a>
    </li >


    <li className=' font-medium text-lg hover:border-b-2 hover:border-[#7b2cbf]'>
        <a href="#">About Me</a>
    </li>
  
    <li className=' font-medium text-lg hover:border-b-2 hover:border-[#7b2cbf]'>
        <a href="#">MY SKILLS</a>
    </li>
    <li className=' font-medium text-lg hover:border-b-2 hover:border-[#7b2cbf]'>
        <a href="#">PROJECTS</a>
    </li>
    <li className=' font-medium text-lg hover:border-b-2 hover:border-[#7b2cbf]'>
        <a href="#">CONTACT</a>
    </li>
</ul>

<div className='text-2xl hover:border-2  p-1 rounded-b-lg lg:hidden '>
    <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />


</div>


</div>

{/* mobile responsive  */}
{
    isOpen ? 
<div className='w-full -mt-10 h-[70vh] bg-[#e019bc]'>
<ul className='flex flex-col gap-7  lg:hidden ml-10 sm:ml-20 text-white mt-10 pt-10'>
    <li className='hover:text-[#7b2cbf] font-medium text-lg hover:border-b-2 hover:border-[#7b2cbf] '>
        <a href="#">Home</a>
    </li >


    <li className='hover:text-[#7b2cbf] font-medium text-lg hover:border-b-2 hover:border-[#7b2cbf]'>
        <a href="#">About Me</a>
    </li>
    
    <li className='hover:text-[#7b2cbf] font-medium text-lg hover:border-b-2 hover:border-[#7b2cbf]'>
        <a href="#">MY SKILLS</a>
    </li>
    <li className='hover:text-[#7b2cbf] font-medium text-lg hover:border-b-2 hover:border-[#7b2cbf]'>
        <a href="#">PROJECTS</a>
    </li>
    <li className='hover:text-[#7b2cbf] font-medium text-lg hover:border-b-2 hover:border-[#7b2cbf]'>
        <a href="#">CONTACT</a>
    </li>
</ul>

</div>
: ""
}
    </nav>
  )
}

export default Navbar
