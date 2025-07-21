// src/App.jsx or src/layout/ScrollProvider.jsx
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import {ToastContainer} from "react-toastify"
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      
<ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product/:id" element={<Product/>}/>
      </Routes>
    </>
  );
}

export default App;




