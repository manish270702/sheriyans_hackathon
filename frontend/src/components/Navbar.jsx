import React from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar({ toggleCart }) {
  return (
    <nav className="flex items-center px-10 justify-between py-4 shadow-md bg-black">
      {/* Logo */}
      <Link to='/home' className="text-2xl font-bold text-blue-500 hover:opacity-80 cursor-pointer">
        LOGO
      </Link>

      {/* Menu */}
      <div className="flex items-center gap-6 text-gray-200">
        <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition">
          <span className="hidden sm:inline">About</span>
        </div>
        {/* Search */}
        <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition">

          <FiSearch className="text-xl" />
          <Link to="/about" className="hidden sm:inline">Search</Link>
        </div>

        {/* Cart */}
        <div
          className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition"
          onClick={toggleCart}
        >
          <FiShoppingCart className="text-xl" />
          <span className="hidden sm:inline">Cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
