import React from 'react';
import Item from './Item';
import { FiX } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/reducers/cartSlice'; // update the path if needed

function Cart({ closeCart }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const checkoutHandler = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          items: cartItems,
          total,
        }),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Checkout failed');

      alert('Order placed successfully!');
      dispatch(clearCart()); // ✅ clear cart
      closeCart(); // ✅ close cart UI
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className='w-full bg-black/50 fixed top-0 left-0 backdrop-blur-sm text-white min-h-screen z-50'>
      <div className="absolute top-0 right-0 w-[28rem] h-screen px-8 py-6 bg-zinc-950 shadow-lg overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className='text-3xl font-bold'>Cart</h2>
          <button onClick={closeCart} className='text-white text-2xl hover:text-red-400 transition'>
            <FiX />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className='text-center text-gray-400'>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <Item key={item.id} item={item} />
          ))
        )}

        {cartItems.length > 0 && (
          <div className="mt-6 border-t border-zinc-700 pt-4">
            <div className="flex justify-between text-lg font-semibold mb-3">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <button
              onClick={checkoutHandler}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md text-white font-semibold"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
