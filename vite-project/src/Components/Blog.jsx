import React from 'react';
import { motion } from "framer-motion"
import Navbar from './Navbar';
import logo from '../../images/aa.jpg';
import logo1 from '../../images/fg.jpg';
import logo3 from '../../images/hg.png';

 
const  Blog= () => {
    return (
        <div>
            <Navbar />
            <div className='mt-8'>
            <h className='text-2xl font-bold animation: spin 5s linear infinitemt-8'>Latest Blog</h>
            </div>
            <div className="z-index: 20 px-8 px-6 mt-7">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={logo3} alt="Man looking at item at a store" />
                   </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                       <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                       <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        {/*Action Button*/}
                        <div className='mt-30 '>
                       <a className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ' href='#'>
                        <button className='text-xl font-bold px-4 bg-cyan-400 rounded mt-6 hover:bg-pink-300 text-white'>
                          Read more
                        </button>
                       </a>
                       </div>
                   </div>
                </div>
            </div>
            <div className='px-6 py-8'>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={logo} alt="Man looking at item at a store" />
                   </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                       <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                       <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                        {/*Action Button*/}
                        <div className='mt-30 '>
                            <a className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ' href='#'>
                                <button className='text-xl font-bold px-4 bg-gray-400 rounded mt-6 hover:bg-cyan-400 text-white'>
                                  Read more
                                </button>
                           </a>
                       </div>
                   </div>
                </div>
            </div>
            </div>

            </div>
        </div>
    );
}
 

 
export default Blog;