import React from 'react';
import { MdStar } from "react-icons/md";
import { DiHtml5, DiJavascript,DiPhotoshop, DiPhp } from "react-icons/di";

const  Education =() => {
  return (
    <section>
    <h1 className='mb-4 rounded-full font-italics sm:text-7xl md:text-4xl text-xl text-orange-500'>TECH STACK</h1>
    <div className='columns-2 gaps-4 shadow-md  md:max-w-7xl px-6 bg-gray-300 rounded-md py-8 h-46'>
    <div className=''>
    <h1 className='font-bold text-red-600 mb-5 text-3xl md:max-w-2xl'>FrontEnd</h1>
    </div>
      <div className='shadow-md md:max-w-2xl flex items-center justify-center pt-4 md:pt-0 space-x-10 mb-6 bg-pink-300 rounded shadow-xl'>

       <DiJavascript  size="5em" className='text-black-600'/>
       
    </div>
    <h1 className='font-bold text-xl mt-6 mb-6'>Javascript</h1>
    <div className='shadow-md md:max-w-2xl flex items-center justify-center pt-4 md:pt-0 space-x-10  mb-6 bg-green-300 rounded'>
   
    <DiPhotoshop size="5em"/>
    </div>
    <h1 className='font-bold text-xl mt-6 mb-6'>Photoshop</h1>
    <div className='shadow-md md:max-w-2xl flex items-center justify-center pt-4 md:pt-0 space-x-10  mb-6 bg-red-300 rounded '>
    
    <DiHtml5 size="5em"/>
    </div>
    <h1 className='font-bold text-xl mt-6 mb-6'>HTML</h1>
    <div className=''>
      <h1 className='font-bold text-red-600 mb-5 text-3xl md:max-w-xl'>BackEnd</h1>
    </div>
    
    <div className='shadow-md md:max-w-xl flex items-center justify-center pt-4 md:pt-0 space-x-10 bg-yellow-100 rounded mb-6'>
    <DiPhotoshop size="5em"/>
    </div>
    <h1 className='font-bold text-xl mt-6 mb-6'>CSS</h1>
   
    <div className='shadow-md md:max-w-xl flex items-center justify-center pt-4 md:pt-0 space-x-10 bg-orange-100 mb-6 rounded '>
    <MdStar size="5em"/>
    </div>
    <h1 className='font-bold text-xl mt-6 mb-6'>Node.js</h1>
    
    <div className='shadow-md md:max-w-xl flex items-center justify-center pt-4 md:pt-0 space-x-10 bg-cyan-100 rounded '>
    <DiPhp size="5em"/>
    </div>
    <h1 className='font-bold text-xl mt-6'>PHP</h1>
    </div>
    </section>
  )
}

export default Education;