import React from 'react';
import logo  from '../../images/aa.jpg';
import logo1  from '../../images/g.jpg';
import Footer from '../Components/Footer';
import logo2 from '../../images/fg.jpg';
import logo4 from '../../images/o.png';
import logo5  from '../../images/24 DELL.png';
import logo6  from '../../images/Bu.jpg';
import logo7 from '../../images/ban.jpg';
import logo8 from '../../images/hjh.jpg';


import { motion, useScroll } from "framer-motion";


import Navbar from './Navbar';

 
const  Projects= () => {
const { scrollYProgress } = useScroll();
    return (
      
 <div className="py-4 px-3 h-50">
           <Navbar />
           <motion.h1 animate={{
                  scale:1.1
                          }}
                          
                        className='font-bold text-4xl text-cyan-300 mb-3 mt-3'>
                         Graphics Designs
            </motion.h1>
    <motion.div 
    className='bg-green-200 rounded h-46'>
           <motion.section annimate={{
                      x:0,
                      y: 0,
                      scale: 0,}} 
                      className='columns-2 gaps-4 shadow-md  md:max-w-7xl  bg-"" shadow-2xl rounded-xl  '>
                 <div>
                      <section className=' px-6 py-3'>
                    
                                {/*Action Button flyers in Project Graphic designs*/}
                                <img className='h-full w-full object-fit: cover; md:h-full md:w-48 rounded-full mt-3' src={logo7} alt="new era"/>
                                <div class="rounded shadow-md h-26 mt-6 bg-white ">
                                  
                                        <div className=' rounded shadow-xl '>
                                            <h className="font-italics text-xl md:text-xl">Flyers and Bronchures for your school,
                                             Businesses and many more.
                                            </h>
                                        </div>
                                        
                               
                            </div>

                            <a className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ' href='#'>
                                         <button className=' mb-4 text-xl font-bold px-6 bg-gray-400 rounded mt-6 hover:bg-cyan-400 text-white'>
                                          <a href='#'>
                                          Flyers
                                          </a>
                                         </button>
                                        </a>

                     
                          {/*Action Button for the Webners designs*/}
                          <img className='h-full w-full object-fit: cover; md:h-full md:w-48 rounded mt-3' src={logo7} alt="new era"/>
                         <div className='rounded shadow-md h-26 mt-4 bg-white'>
                           
                              <div>
                                <h className="font-italics text-xl md:text-l"> All your Webners for your business
                                    Tickets for any event
                                    Ask for Quatations of the 
                                    tickets.
                                    Influence the event.
                                </h>
                              </div>
                               
                           
                       </div>

                       <a className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ' href='#'>
                               <button className='mt-4 mb-4 text-xl font-bold px-4 bg-gray-400 rounded  hover:bg-cyan-400 text-white'>
                                <a href='#'>
                                Webners
                                </a>
                                </button>
                                 </a>
                
                            {/*Action Button Socials media designs*/}
                            <img className='h-34 w-full object-cover md:h-full md:w-48 rounded'  src={logo7} alt="new era"/>
                        <div className='rounded shadow-md h-26 mt-4 bg'>
                                   
                                    <div className="mt-3">
                                     <h1>All your social media posts
                                     Tickets for any event
                                     Ask for Quatations of the 
                                     tickets.
                                     Influence the event.
                                     </h1>
                                     </div>
                              <div className='rounded shadow-md mt-6'>
                                     
                             </div>
                        </div>

                        <a className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ' href='#'>
                                     <button className='mt-4 mb-4 text-xl font-bold px-4 bg-gray-400 rounded mt-6 hover:bg-cyan-400 text-white'>
                                      Social Media
                                     </button>
                                     </a>
                
                      <div>
                
               
               
                 </div>

                   {/*Action Tickets*/}
                <div className="mt-5 py-4">
                    <div className="rounded shadow-md h-26 columns-2 mt-6 bg-gradient-to-r from-red-500 to-cyan-300">
                       <img className='h-34 w-full object-cover md:h-full md:w-48 rounded'  src={logo7} alt="new era"/>
                        <div className="mt-3">
                            <h1 className="font-bold ">
                                Tickets for any event
                                Ask for Quatations of the 
                                tickets.
                                Influence the event.
                            </h1>
                        </div>
                        <div className='mt-15 rounded shadow-md '>
                           
                       </div>
                    </div>
                 
                    <a className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ' href='#'>
                                <button className='mt-4 mb-4 text-xl font-bold px-4 bg-gray-400 rounded  hover:bg-cyan-400 text-white'>
                                Tickets
                                </button>
                            </a>


                    {/*Action Business Cards*/}
                    <motion.div whileHover={{
                                scale:0.9
                    }}
                    
                    className="rounded shadow-md h-26 mt-2 bg-gradient-to-r from-blue-500 to-green-200">
                       <img className='h-34 object-fill h-48 w-96 md:h-full md:w-48 rounded'  src={logo7} alt="new era"/> 
                       <div className="mt-3">
                        <h1 font-bold>I do create awesome Business Ids for employees and students</h1>  
                        </div>           
                           <div className='rounded shadow-md h-26 mt-6'>
                      </div>
                    </motion.div>

                    <a className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ' href='#'>
                             <button className='mt-4 mb-4 text-xl font-bold px-4 bg-gray-400 rounded hover:bg-cyan-400 text-white mt-2 mb-6'>
                              Business IDs
                             </button>
                             </a>

               {/*Action Logos*/}
               <div className="rounded shadow-md h-26 mt-2 bg-gradient-to-r from-orange-500 to-magneto-300">
                  <img className='h-34 w-full object-cover md:h-full md:w-48 rounded'  src={logo7} alt="new era"/>  
                  <div className="">
                    <h1 className="font-bold">
                    Tickets for any event
                    Ask for Quatations of the 
                    tickets.
                    Influence the event.
                    </h1>
                    </div>                
                 <div className='mt-6 '>
                      
                </div>
               </div>

               <a className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6 ' href='#'>
                          <button className='text-xl font-bold px-4 bg-gray-600 px-4 rounded mb-4 hover:bg-cyan-400 text-white'>
                          LOGOS
                          </button>
                      </a>

               </div>
               </section>
             
              </div>
         
          </motion.section>
 
                   {/*Web development section */}


              <h1 className='font-italic text-5xl text-pink-600 mt-5'>
              Web Development
              </h1>

         <section className=''>
         <div className='px-6 py-8'>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={logo2} alt="Man looking at item at a store" />
                   </div>
                    <div className="p-8">
                      <div className="uuppercase tracking-wide text-xl text-indigo-500 font-bold">Spiritech</div>
                       <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Connecting business with Spirituality</a>
                       <p className="mt-2 text-slate-500">A project that connects modern businesses wiyh ancient spirituality.
                       Its an incoming project</p>
                   </div>
                </div>
            </div>
            </div>
          </section>

         <section className=''>
           <div className='px-6 py-8'>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={logo1} alt="Man looking at item at a store" />
                   </div>
                    <div className="p-8">
                      <div className="tracking-wide text-xl text-indigo-500 font-bold">Zangitech</div>
                       <h className="mt-1 text-lg leading-tight font-medium text-black hover:text-cyan-600 text-bold rounded px-4">All in one Ecommerce Site.</h>
                       <p className="mt-2 text-slate-500">Bridging the gap between you and the products. You dont need to go to the market
                       .
                       Its an incoming project</p>
                      {/*Action Button*/}
                      <div className='mt-30 '>
                            <a className='max-w-md mx-auto bg-white rounded shadow-md overflow-hidden md:max-w-2xl ' href='#'>
                                <button className='h-10 text-xl font-bold px-4 bg-gray-400 rounded mt-6 hover:bg-cyan-400 text-white'>
                                  Open Project
                                </button>
                           </a>
                   </div>
                </div>
            </div>
            </div>
            </div>
            </section>
      
      
        </motion.div>
        <Footer />
    </div>

    );
}
 

 
export default Projects;