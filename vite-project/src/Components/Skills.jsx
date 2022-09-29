import React from 'react';
import logo2 from '../../images/s.png';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FaHtml5,FaReact,FaCss3, FaShopify,FaNodeJs, FaBootstrap, FaDigitalTachograph, FaDatabase, FaChessKing, FaGrinHearts, FaGithub } from 'react-icons/fa';
import { SiAdobephotoshop,SiAdobepremierepro } from "react-icons/si";


 
const  Skills= () => {
    return (

        <div className='py-6 mt-4  '>
          <h1 className='py-4 px-3 text-red-500 font-italic text-5xl mb-4'>My Skills</h1>
          <div className=" shadow-2xl rounded-2xl columns-2 shadow-md  md:max-w-7xl px-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md py-8 h-46 ">
        
            <div class="space-y-6 px-6 py-4 font-bold">
              <motion.div 
                animate={{
                FontSize: 40,
                color: "blue", }} 
                whileHover={{
                  scale:1.3,
                  scaleX:0.5,
                }}
                 className="w-100 bg-orange-400 shadow  mt-6 rounded text-2xl">
              
              <div className="flex items-center justify-center pt-8 md:pt-0 space-x-10">
              <FaHtml5 size="3em" className="text-red-300 mt-4 mb-6" />
              </div>
              
              </motion.div>
              <h1 className='mt-6 mb-4'>HTML</h1>
              <motion.div whileHover={{
                              scale:1.3,
                              scaleX:0.5
                              

              }}
               className="w-100 bg-orange-400 shadow mt-6 rounded font-bold text-2xl text-blue-600">
            
              <div className="flex items-center justify-center pt-4 md:pt-0 space-x-10">
              <FaCss3 size="3em" className="text-yellow-300 mt-4 mb-6"/>
              </div>
              </motion.div>
              <h1 className='mt-4 mb-4'>CSS</h1>


              <motion.div whileHover={{
                            scale:1.3,
                            scaleX:0.6
                                  }}
               className="w-100 bg-green-400 shadow rounded mt-6 text-white font-bold">
              
              <div className="flex items-center justify-center pt-8 md:pt-0 mb-4 space-x-10">
              <FaChessKing size="3em" className="text-yellow-300 mt-4 mb-6" />
              </div>
              </motion.div>
              <h1 className='mt-4 mb-4'>JAVASCRIPT</h1>



              <motion.div whileHover={{
                            scale:1.3,
                            scaleX:0.5
                                  }}
               className="w-100 bg-white shadow rounded mt-6">
                
              <div className="flex items-center justify-center pt-8 md:pt-0 space-x-10">
              <FaGithub size="3em" className="text-black-600 mt-4 mb-6 " />
              </div>
              </motion.div>
              <h1 className='mt-4 mb-4'>GIT & GITHUB </h1>

              <motion.div whileHover={{
                            scale:1.3,
                            scaleX:0.5
                                  }}
              className="w-100 bg-orange-400 shadow rounded mt-6">
              
              <div className="flex items-center justify-center pt-8 md:pt-0 space-x-10">
              <FaDatabase size="3em" className='text-red-700 mt-4 mb-6' />
              </div>
              </motion.div>
              <h1 className='mt-4 mb-4'>GRAPHQL & DATABASES</h1>
            </div>
            <div className="space-y-3 px-6 mt-6">
          <div className='mt-8 py-4'>
            <motion.div whileHover={{
                            scale:1.3,
                            scaleX:0.5
                                  }}
             className="w-100 bg-orange-400 font-bold mt-9 shadow rounded">
            
            <div className="flex items-center justify-center pt-8 md:pt-0 space-x-10">
            <FaReact size="4em" className="text-green-300 mt-6" />
            </div>
            </motion.div>
            <h1 className='mt-5 mb-4  font-bold'>REACT.JS</h1>
            
            {/*Node.js container*/}
              <motion.div  whileHover={{
                           scale:1.3,
                           scaleX:0.5
                 }}
               className="w-100 bg-orange-600 font-bold shadow rounded mt-10">
             
              <div className="flex items-center justify-center pt-8 md:pt-0 space-x-10 mb-4">
              <FaNodeJs size="3em" className="text-yellow-300 mt-4 mb-6" />
              </div>
              </motion.div>
              <h1 className='mt-4 mb-4 font-bold'>NODE.JS</h1>

              <motion.div whileHover={{
                           scale:1.3,
                           scaleX:0.5
                           }}
              className="w-100 bg-orange-500 shadow font-bold rounded mt-6">
                
              <div 
              className="flex items-center justify-center pt-8 md:pt-0 space-x-10"> 
              <FaBootstrap size="3em" className="text-yellow-300 mt-4  mb-6" />
              </div>
               </motion.div>
               <h1 className='mt-4 mb-4 font-bold'>TAILWIND & BOOTSTRAP</h1>

               <motion.div whileHover={{
                           scale:1.3,
                           scaleX:0.5
                           
                           }}
                           animate={{
                            opacity:100,
                           }}
               className="w-100 bg-orange-300 font-bold shadow rounded mt-6 ">
                
              <div className="flex items-center justify-center pt-8 md:pt space-x-3 "> 
              <SiAdobephotoshop size="3em" className="text-blue-700 mt-4 mb-6" />
              <SiAdobepremierepro size="3em" className="text-purple-700 mt-4 mb-6" />
              </div>
               </motion.div>
               <h1 className='mt-4 mb-4 font-bold'>GRAPHIC DESIGNS</h1>

               <motion.div whileHover={{
                           scale:1.2,
                           scaleX:0.5
                          
                           }}
                           animate={{
                            opacity:80,
                           }}
               className="w-100 bg-orange-200 font-bold shadow rounded mt-6">
                
               
              <div className="flex items-center justify-center pt-8 md:pt-0 space-x-10"> 
              <FaShopify size="3em" className="text-green-400 mt-6 mb-10" />
              </div>
               </motion.div>
               <h1 className='mt-4 mb-4 font-bold'>WORDPRESS & SHOPIFY</h1>
            </div>

            </div>

         </div>
        </div>
    );
}
 

 
export default Skills;