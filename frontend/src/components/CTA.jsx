import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function CTA() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-zinc-900 to-black text-center text-white py-14 px-6 backdrop-blur-md"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-4 animate-pulse text-blue-500">
        Join the Fragrance Revolution
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-6">
        Be the first to discover new collections, get exclusive offers, and experience scents that redefine luxury.
      </p>
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full text-white font-semibold shadow-md hover:shadow-blue-500/30">
        Explore Our Collection
      </button>
    </div>
  );
}

export default CTA;
