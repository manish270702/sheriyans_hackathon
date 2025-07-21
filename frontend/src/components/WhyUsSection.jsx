import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyUsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-zinc-950 px-6 py-16 text-white text-center relative overflow-hidden">
      {/* Animated Divider Line */}
      <div className="absolute top-0 left-1/2 w-[2px] h-16 bg-blue-500 animate-pulse origin-top -translate-x-1/2"></div>

      <h2 className="text-3xl font-bold mb-4 text-blue-500" data-aos="fade-up">Why Choose Us</h2>

      <p
        className="max-w-3xl mx-auto text-gray-300 text-lg mb-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        At <span className="font-semibold text-white">EssenceCraft</span>, we blend artistry with science to deliver perfumes that are not just fragrances — they’re expressions of identity.
        Our passion lies in creating timeless scents using ethically sourced, high-quality ingredients that linger in memory.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6 text-left max-w-4xl mx-auto">
        {[
          {
            title: "✨ Authentic Ingredients",
            desc: "We use natural extracts and sustainable practices to ensure purity and safety.",
          },
          {
            title: "🌿 Ethical Crafting",
            desc: "Our perfumes are cruelty-free, handcrafted in small batches for maximum quality.",
          },
          {
            title: "🕰️ Lasting Impact",
            desc: "Our scent formulas are designed to last — leaving an impression, not just a trace.",
          },
        ].map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={200 + i * 150}
            className="group bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 transition-all duration-300 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2 flex items-center gap-1">
              <span className="inline-block transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                {item.title.split(" ")[0]}
              </span>
              {item.title.split(" ").slice(1).join(" ")}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyUsSection;
