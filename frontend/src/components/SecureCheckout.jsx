import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SecureCheckout() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const features = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      desc: 'Dispatched within 24 hours.',
      aos: 'fade-up',
    },
    {
      icon: '🔒',
      title: 'Secure Checkout',
      desc: '128-bit SSL encrypted payments.',
      aos: 'fade-up',
    },
    {
      icon: '💬',
      title: 'Customer Support',
      desc: 'Chat, email, or call us anytime.',
      aos: 'fade-up',
    },
    {
      icon: '↩️',
      title: 'Hassle-Free Returns',
      desc: 'Easy 7-day return policy.',
      aos: 'fade-up',
    },
  ];

  return (
    <div className="bg-zinc-950 text-white px-6 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      {features.map((item, index) => (
        <div
          key={index}
          data-aos={item.aos}
          data-aos-delay={index * 150}
          className="bg-zinc-900 hover:-translate-y-1 transition-transform duration-300 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 group"
        >
          <h4 className="text-blue-500 text-lg font-semibold mb-1 flex justify-center items-center gap-2">
            <span className="text-2xl animate-pulse group-hover:scale-110 transition">{item.icon}</span>
            {item.title}
          </h4>
          <p className="text-gray-400 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default SecureCheckout;
