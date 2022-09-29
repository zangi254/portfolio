import React from 'react';
import logo  from '../../images/zangi.png';
import { motion } from "framer-motion";
import logo3 from '../../images/hg.png';
import logo7 from '../../images/ban.jpg';
import { FaEnvelope, FaGithub, FaLinkedin,FaTwitter } from 'react-icons/fa';
import { MdStar } from "react-icons/md";
 
const Hero  = () => {
    return (
        
        <motion.div initial={{ opacity: 3, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
          
           className="h-62 bg-gradient-to-r from-teal-200 to-sky-500 shadow-2xl columns-auto row-2 py-8 px-6 mt-8 rounded">
            <section className="py-8 px-6">
             <div className="md:w-0.25 max-w-xs overflow-hidden bg-gradient-to-r from-yellow-200 to--500 shadow-2xl rounded-lg shadow-lg dark:bg-gray-800 max-w-md mx-auto bg-white rounded shadow-md overflow-hidden md:max-w-7xl ">
                <motion.img animate={{
                                  scale:0.9,
                                  opacity: 100,
                                  x:10,
                                  y:15}}
                                  whileHover={{
                                    scale:1.2,
                                  }}

                src={logo} alt="logo" className="w-16 md:w-32 lg:w-48 object-cover w-full h-70 py-8 px-2 max-w-md mx-auto bg-white rounded-full shadow-md overflow-hidden md:max-w-7xl">

                </motion.img>

               <motion.div animate={{
                           scale: [1, 2, 2, 1, 1],
                           rotate: 360,
                           borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                           }}
              className="py-3 text-center animate-bounce">
                  <a href="#" className="block text-2xl font-bold text-gray-800 dark:text-white mt-2">George Githinji</a>
                  <span className="underline decoration-pink-500/60 text-sm text-gray-700 dark:text-gray-200 mt-2">Software Developer</span>
              </motion.div>
             
             </div>  
           
            </section>
           <motion.div
             animate={{
                
                opacity:60,

                    }} 
             className=" w-auto max-w-2xl overflow-block bg-white rounded-md shadow-lg  max-w-md mx-auto md:max-w-7xl">
            <motion.h1 
         
             animate={{ x:4 }}
             transition={{ delay: 3 }}

              className="w-full h-full py-3 text-black-500  font-italics  mb-5 md:pt-0 mt-8 md:w-4xl ">
            
             Accomplished software developer with 4 years of experience in development of applications.
             Excels in every stage of the life cycle of software development, including design creation, 
             coding, debugging, testing, and maintenance. 
             Expert in devising innovative and tailored solutions to assist businesses achieve their goals
             in a variety of industries.Also Creative in Graphical User Interface,Computer Networking,Computer
             Hardware,Databases and User Support.
            
             </motion.h1>
             <motion.div  className='flex items-center justify-center mb-8 pt-8 md:pt-0 space-x-6 space-between'>
              <a  href="https://www.twitter.com/George-githinji/" className="social-link text-blue-700">
              <FaTwitter size="2em" />
              </a>
              <a  href="https://www.twitter.com/George-githinji/" className="social-link">
              <FaGithub size="2em" />
              </a>
              <a  href="https://www.twitter.com/George-githinji/" className="social-link text-blue-700">
              <FaLinkedin size="2em"  className="sm:text-xl" />
              </a>
              <a  href="https://www.twitter.com/George-githinji/" className="social-link text-red-600">
              <FaEnvelope size="2em" />
              </a>
             </motion.div>
           
            
            </motion.div>


            <div className='py-6 mt-10 max-w-md mx-auto md:max-w-2xl mb-6 '>
            <motion.button 
                    initial={{
                        y:-300,
                        opacity: 0.1
                    }}
                    transition={{
                        type:"spring",
                        stiffness:60
                    }}
                    onClick={()=> setIsAnimating(!isAnimating)}
                    animate={{
                        scale:1.5,
                        x: 30,
                        y: 10,
                        }} className='bg-yellow-350 '>
                <a href='#' 
                className=" hover:bg-yellow-300 text-white bg-gray-600 font-bold px-4 py-2 rounded text-sm font-medium">
                Hire Me 
                </a>
            </motion.button>
            <motion.div whileHover={{
                        scale:0.9
            }}
            className='mt-6 container rounded  shadow-md bg-gray-400 animate-bounce'>
               <div className='flex items-center justify-center pt-3 md:pt-0 space-x-9 space-between mt-8 py-6 md:max-w-xl'>
                <MdStar size="6em" className='text-orange-200 md:max-w-xl md:text-xl text-2xl'/>
                <MdStar  size="5em" className='text-orange-200 md:max-w-xl md:text-xl text-2xl'/>
                <MdStar  size="5em" className='text-orange-200 md:max-w-xl md:text-xl text-2xl'/>
                <MdStar  size="5em" className='text-orange-200 md:max-w-xl md:text-xl text-2xl'/>
                <MdStar  size="5em" className='text-orange-200 md:max-w-xl md:text-xl text-2xl'/>
                <MdStar  size="5em" className='text-orange-200 md:max-w-xl md:text-xl text-2xl'/>
                <MdStar  size="5em" className='text-orange-200 md:max-w-xl md:text-xl text-2xl'/>
               </div>
            </motion.div>
            <div className='flex items-center justify-center mt-4 hover:scale-2'>
            <a href='/Testimonials' >
                    <button className='hover:bg-yellow-300 text-white bg-gray-600 font-bold px-3 py-2 rounded-md text-sm font-medium flex items-right'>
                        Rate Me
                    </button>
                </a>
                </div>
            </div>
        </motion.div>
    );
}
 

 
export default Hero;