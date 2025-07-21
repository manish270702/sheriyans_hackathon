import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/reducers/cartSlice';

function Card({ product }) {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!isInCart) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  return (
    <div className='bg-zinc-900 p-4 rounded-xl text-white shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-shadow duration-300 relative group mt-5 hover:mt-2'>
      
      {/* Top Row: Tag and Heart */}
      <div className="flex justify-between items-center text-sm mb-2">
        <span className='bg-blue-600 px-2 py-0.5 rounded-full text-xs font-semibold'>{product?.tag}</span>
        <button
          onClick={() => setLiked(!liked)}
          className={`text-lg transition ${liked ? 'text-red-500' : 'text-gray-400'}`}
        >
          <FiHeart />
        </button>
      </div>

      {/* Image wrapped in link */}
      <Link to={`/product/${product?.id}`}>
  <div className="w-full h-50 cursor-none overflow-hidden rounded-lg">
    <img
      src={product?.image}
      alt={product?.name}
      className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
    />
  </div>
</Link>


      {/* Title */}
      <h3 className='text-lg font-semibold mt-4'>{product?.name}</h3>

      {/* Price + Cart button */}
      <div className='flex justify-between items-center text-sm text-gray-300 mt-2'>
        <span>₹{product?.price}</span>
        {isInCart ? (
          <span className="text-green-400 text-xs font-semibold">Added to Cart</span>
        ) : (
          <button
            onClick={handleAddToCart}
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-xs font-medium"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
