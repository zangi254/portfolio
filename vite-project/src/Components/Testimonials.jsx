import React from 'react';
import logo2 from '../../images/o.png';
import logo3 from '../../images/g.jpg';
import logo4 from '../../images/d.jpg';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

 
const  Testimonials= () => {
    return (
  <div className=" h-auto">
<Navbar/>
<section className="max-w-7xl p-6 mx-18 mt-10 bg-cyan-300 rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Give me a Recommendation</h2>

    <form>
        <div className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-1">
            <div className='justify-self-center mt-2 '>
                <label className="text-gray-700 dark:text-gray-200  " for="username"> Your Name</label>
                <input id="username" type="text" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div className=''>
                <label className="text-gray-700 dark:text-gray-200 pb-8" for="username">Write anything about me.</label>
                <input id="username" type="text" className=" px-15 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 h-40 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div className="flex justify-center mt-6">
                <button className="px-6 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
            </div>
            <div className='shadow-md rounded-xl bg-white mt-8 '>
                <div className='font-bold text-xl'>
                    The Recommendations will soon be posted on the site and will be 
                    treated as confidential if you would like it be annonymous.
                </div>
            </div>
        </div>

       
    </form>
</section>
<Footer />
</div>

    );
}
 

 
export default Testimonials;