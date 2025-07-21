import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">

        {/* Brand */}
        {/* Brand */}
<div>
  <img
  src="https://icon2.cleanpng.com/20180131/qkw/aviht4n93.webp"
  alt="EssenceCraft Logo"
  className="h-12 mb-3 invert contrast-150 hover:opacity-80 transition duration-300"
/>

  <p className="text-gray-400">
    Crafting memories through timeless fragrances.
  </p>
</div>


        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/shop" className="hover:text-blue-400 transition">Shop</a></li>
            <li><a href="/about" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-blue-400 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-white font-semibold mb-2">Our Policies</h3>
          <ul className="space-y-1">
            <li><a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</a></li>
            <li><a href="/returns" className="hover:text-blue-400 transition">Return Policy</a></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-2">Stay Connected</h3>
          <div className="flex gap-4 text-lg mb-4">
            <a href="#" className="hover:text-blue-400 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaLinkedinIn /></a>
          </div>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 w-full rounded bg-zinc-800 text-white text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white text-sm font-medium transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-zinc-800 pt-6">
        © {new Date().getFullYear()} EssenceCraft. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
