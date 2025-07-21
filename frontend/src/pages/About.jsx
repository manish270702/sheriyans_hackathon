import React, { useEffect, useRef, useState } from 'react';
import CustomCursor from '../components/CustomCursor';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';

function About() {
  const containerRef = useRef(null);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div ref={containerRef} data-scroll-container className="bg-black text-white font-sans">
      <Navbar toggleCart={() => setCartOpen(prev => !prev)} />
      {cartOpen && <Cart closeCart={() => setCartOpen(false)} />}
      <CustomCursor />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-10 text-center">
        <h1 className="text-5xl font-bold text-blue-500 mb-6" data-scroll data-scroll-speed="1">
          The World of Chanel Fragrances
        </h1>
        <p className="max-w-xl text-gray-300 text-lg" data-scroll data-scroll-speed="2">
          Welcome to a realm where elegance meets identity. Chanel perfumes are crafted not just to scent the skin—but to define your presence.
        </p>
      </section>

      {/* Heritage */}
      <section className="py-24 px-10 md:px-32 text-left">
        <h2 className="text-4xl font-bold text-blue-400 mb-6" data-scroll>
          The Legacy of Coco Chanel
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed" data-scroll data-scroll-speed="1">
          Since 1921, Chanel has redefined femininity. From the legendary Chanel N°5 to the bold Coco Mademoiselle, each fragrance is a chapter in the house’s rich story.
        </p>
        <p className="mt-4 text-gray-400 text-lg" data-scroll data-scroll-speed="1">
          Chanel stands not only for luxury, but for independence, courage, and allure. Every scent is a signature, just like the woman who wears it.
        </p>
      </section>

      {/* Ingredients & Imagery */}
      <section className="grid md:grid-cols-2 gap-10 px-10 md:px-32 py-20 items-center">
        <div data-scroll data-scroll-speed="1">
          <img
            src="https://images.unsplash.com/photo-1681237398100-4d3b1618b6c4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Natural Ingredients"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div data-scroll data-scroll-speed="-1">
          <h2 className="text-3xl font-semibold text-blue-400 mb-4">Pure Ingredients</h2>
          <p className="text-gray-400 text-lg">
            Only the rarest natural essences are used—Grasse jasmine, may rose, and Sicilian orange. Harvested sustainably, blended masterfully.
          </p>
        </div>
      </section>

      {/* Tradition vs Innovation */}
      <section className="py-24 px-10 md:px-32 bg-zinc-900" data-scroll>
        <h2 className="text-4xl font-bold text-blue-400 mb-6">Tradition Meets Innovation</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          While rooted in classic French perfumery, Chanel constantly reimagines its formulas for the modern age—creating timeless, yet contemporary fragrances.
        </p>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-10 md:px-32 text-center" data-scroll>
        <h2 className="text-4xl font-bold text-blue-400 mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "The only perfume I wear that truly feels like me.",
            "Elegant, lasting, unforgettable. Chanel is magic.",
            "A single spray brings confidence that lasts all day.",
          ].map((quote, i) => (
            <blockquote
              key={i}
              className="bg-zinc-800 p-6 rounded-lg text-gray-300 text-md shadow-md hover:shadow-blue-500/20 transition"
              data-scroll
              data-scroll-speed={i % 2 === 0 ? "1" : "-1"}
            >
              “{quote}”
            </blockquote>
          ))}
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 px-10 md:px-32" data-scroll>
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Sustainable Luxury</h2>
        <p className="text-gray-400 text-lg">
          Chanel is committed to responsible sourcing, recyclable packaging, and carbon-neutral practices—without compromising luxury.
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-10 text-center bg-zinc-900" data-scroll data-scroll-speed="1">
        <h2 className="text-3xl font-bold text-white mb-4">Join the Chanel World</h2>
        <p className="text-gray-400 mb-6">Explore our curated collection of iconic scents.</p>
        <a
          href="/products"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Shop Now
        </a>
      </section>

      <Footer />
    </div>
  );
}

export default About;
