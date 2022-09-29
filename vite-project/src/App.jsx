import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Testimonials from './Components/Testimonials';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Education  from './Components/Education';



const App=()=> {
 

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Footer />
    </div>

   
  )
}

export default App;
