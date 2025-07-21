import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 px-10 py-10 bg-gradient-to-r from-zinc-950 to-black">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-6" data-aos="zoom-out-right">
        <h1 className="text-4xl font-bold text-white leading-tight">
          Discover the Essence of Elegance
        </h1>
        <p className="text-lg text-gray-300">
          We craft luxury perfumes that reflect your personality and style. Made from natural ingredients with long-lasting fragrance, our collection offers something for everyone.
        </p>
        <ul className="list-disc pl-5 text-gray-400 space-y-1">
          <li>Premium quality ingredients</li>
          <li>Elegant and minimal packaging</li>
          <li>Long-lasting scent for all occasions</li>
        </ul>
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex gap-5">
        <div
          className="w-1/2 h-[24rem] overflow-hidden mt-40 rounded-xl shadow-lg"
          data-aos="zoom-out-left"
        >
          <img
            src="https://images.unsplash.com/photo-1592842414859-bca1263fabc2?q=80&w=1974&auto=format&fit=crop"
            alt="Perfume main"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div
            className="h-1/2 overflow-hidden rounded-xl shadow-lg"
            data-aos="zoom-out-up"
            data-aos-delay="150"
          >
            <img
              src="https://images.unsplash.com/photo-1593087130576-389402bc050a?q=80&w=2070&auto=format&fit=crop"
              alt="Perfume 1"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div
            className="h-1/2 overflow-hidden rounded-xl shadow-lg"
            data-aos="zoom-out-down"
            data-aos-delay="300"
          >
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1974&auto=format&fit=crop"
              alt="Perfume 2"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
