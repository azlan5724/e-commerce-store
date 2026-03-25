
import { useCart } from '../context/CartContext';

const CartItem = ({ product }: { product: { id: string; name: string; price: number } }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <h4>{product.name}</h4>
        <p>${product.price}</p>
      </div>
      <button onClick={() => removeFromCart(product.id)} className="text-red-500">Remove</button>
    </div>
  );
};

export default CartItem;