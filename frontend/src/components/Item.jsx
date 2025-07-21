import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/reducers/cartSlice';

function Item({ item }) {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const decrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeFromCart(item.id)); // if quantity goes to 0, remove
    }
  };

  return (
    <div className='w-full bg-zinc-700 h-28 mb-3 gap-8 px-5 flex py-3 rounded-md'>
      {/* Product Image */}
      <div className="img-container h-full w-24">
        <img src={item.image} className='h-full w-full object-cover' alt={item.name} />
      </div>

      {/* Info */}
      <div className='flex flex-col justify-between py-1'>
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <h3 className="text-sm text-gray-300">₹{item.price}</h3>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={decrement}
            className="w-7 h-7 bg-gray-200 text-black rounded-full hover:bg-gray-300"
          >–</button>

          <span className="font-medium">{item.quantity}</span>

          <button
            onClick={increment}
            className="w-7 h-7 bg-gray-200 text-black rounded-full hover:bg-gray-300"
          >+</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
