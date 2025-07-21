import React, { useState } from 'react';  // ✅ import useState
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Cart from '../components/Cart';
import WhyUsSection from '../components/WhyUsSection';
import CTA from '../components/CTA';
import Testimonials from '../components/Testimonials';
import ProductShowcase from '../components/ProductShowcase';
import SecureCheckout from '../components/SecureCheckout';
import CustomCursor from '../components/CustomCursor';
import ParallaxPage from '../components/ParallaxPage';
import Footer from '../components/Footer';

function Home() {
  // ✅ useState directly inside component
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className='bg-black min-h-screen cursor-none relative text-white'>
      {/* Navbar with cart toggle */}
      <Navbar toggleCart={() => setCartOpen(prev => !prev)} />

      {/* Cart overlay, shown conditionally */}
      {cartOpen && <Cart closeCart={() => setCartOpen(false)} />}

      {/* Main content */}
      <CustomCursor />
      <Banner />
      <Cards />
      <ProductShowcase />
      <ParallaxPage />
      <WhyUsSection />
      <Testimonials />
      <SecureCheckout />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;
