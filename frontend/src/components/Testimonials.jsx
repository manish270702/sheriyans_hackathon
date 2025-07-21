import React, { useEffect, useState, useRef } from 'react';

function Testimonials() {
  const [typedText, setTypedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  const fullText = 'What Our Customers Say';
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startTyping) {
          setStartTyping(true);
        }
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, [startTyping]);

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, [startTyping]);

  return (
    <div className="bg-black text-white px-6 py-12">
      <h2
        ref={headingRef}
        className="text-3xl font-bold text-center mb-10 text-blue-500"
      >
        {typedText}
        {startTyping && <span className="animate-pulse">|</span>}
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            text: '"Absolutely in love with the scent. It\'s soft, elegant, and lasts all day."',
            author: '— Riya M.',
          },
          {
            text: '"Finally found a cruelty-free brand that smells luxurious and feels ethical."',
            author: '— Aman K.',
          },
          {
            text: '"The bottle design and packaging itself feels premium. 10/10"',
            author: '— Sneha V.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-blue-500/20 transition duration-300"
          >
            <p className="text-gray-300 italic">{item.text}</p>
            <h4 className="mt-4 text-blue-400 font-semibold">{item.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
