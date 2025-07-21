// CustomCursor.jsx
import React, { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] w-4 h-4 bg-white rounded-full mix-blend-difference transition-transform duration-150"
      style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
    ></div>
  );
}

export default CustomCursor;
