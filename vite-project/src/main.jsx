import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import About from './Components/About';
import {BrowserRouter, Route, Routes,Link as Router } from 'react-router-dom';
import Testimonials from './Components/Testimonials';
import Projects from'./Components/Projects';
import Login from'./Components/Login';
import Blog from'./Components/Blog';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route  exact path="/" element={  <App />} />
  <Route path ="/About" element={<About />} />
  <Route path ="/Testimonials" element={<Testimonials />} />
  <Route path ="/Projects" element={<Projects />} />
  <Route path ="/Login" element={<Login />} />
  <Route path ="/Blog" element={<Blog />} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
