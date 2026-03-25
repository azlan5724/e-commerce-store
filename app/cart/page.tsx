// app/cart/page.tsx

'use client';  // Mark this component as a Client Component

import { useCart } from '../../context/CartContext';  // Import the useCart hook

const Cart = () => {
  const { cart } = useCart();  // Use the client-side hook here

  return (
    <div>
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border-b py-4">
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;