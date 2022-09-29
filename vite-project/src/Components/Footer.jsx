import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin,FaTwitter,FaHandHoldingHeart, FaGrinStars } from 'react-icons/fa';


 
const  Footer= () => {
    return (
        <div className=' py-12 mt-6  shadow-2xl rounded-2xl shadow-md'>

          <h className="font-bold text-2xl mt-12">Follow me on social media</h>
          <div className='flex items-center justify-center pt-8 md:pt-0 space-x-10 space-between mt-8'>
          <FaTwitter size='2em' className='text-cyan-600' />
          <FaGithub size="2em"  />
          <FaFacebook size="2em"  className="social-link text-cyan-600" />
          <FaLinkedin size="2em" className="social-link text-cyan-600"/>
          </div>
          <div className='py-10 mb-30'>
          <h1 className='font-bold flex items-center justify-center'>  
          Created by George with 
            <FaGrinStars size="2.0em"  className="text-yellow-600 " /> 
            </h1> 
            <h1 className='mt-3 font-bold'>
           © 2022  
           </h1>
          </div>
        </div> 
    );
}
 

 
export default Footer;