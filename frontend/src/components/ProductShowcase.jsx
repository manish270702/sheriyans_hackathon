import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProductShowcase() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-black text-white px-6 py-16">
      <h2
        className="text-3xl font-bold text-center text-blue-500 mb-10 animate-fade-in-up"
        data-aos="fade-up"
      >
        Explore Our Signature Scents
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "Eau de Parfum Vaporisateur",
            desc: "The Chanel Eau de Parfum Vaporisateur Spray captures the spirit of elegance, sophistication, and femininity. With each spray, you're enveloped in a bouquet of floral, powdery, and sensual notes that linger beautifully — a signature of Chanel’s iconic perfumery.",
            image: "https://images.unsplash.com/photo-1711204657517-76055759b0e9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            name: "Coco Mademoiselle",
            desc: "Coco Mademoiselle is Chanel’s tribute to the modern woman who defines elegance with a rebellious twist. Fresh, vibrant, and sensual — this Eau de Parfum exudes confidence and independence in every spray.",
            image: "https://images.unsplash.com/photo-1592914567656-9e0eecfbe694?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            name: "CHANEL",
            desc: "CHANEL has redefined modern luxury with its uncompromising dedication to elegance, simplicity, and innovation. The house of CHANEL stands as a global symbol of refined beauty, freedom, and confidence.",
            image: "https://images.unsplash.com/photo-1669008344036-0504a4954e86?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ].map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
            className="bg-zinc-900 p-4 rounded-xl shadow hover:shadow-blue-500/20 transition duration-300 transform hover:scale-105 group"
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover rounded-md mb-4 transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">{item.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
            <button className="text-blue-400 border border-blue-400 rounded-md px-3 py-1 text-sm hover:bg-blue-500 hover:text-white transition duration-200">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase;
