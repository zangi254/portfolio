import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { AiOutlineMenu } from "react-icons/ai";

 
const  Navbar= () => {
    let [open,setOpen]=useState(false);
    return (
        <div>
        <nav className="shadow-md dark:bg-gray-400 h-30 mx-auto w-full  top-0 left-0 ">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300  md:px-10 px-7 ">
                <img src={logo} alt="" className="w-32 cursor-pointer hover:cursor"/>
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <AiOutlineMenu  size="2em" className='text-black-600'/>
                </div>
                <div className='hidden md:flex space-x-6'>
                <a href="/" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>

                <a href="/Projects" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Projects</a>

                <a href="/Testimonials" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Testimonials</a>

                <a   href="/Blog"  className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Blog</a>

                <a href="/Login" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-pink-300 ">Login</a>
                </div>
    </div>
</nav>
        </div>
    );
} 
 

 
export default Navbar;