
import { useCart } from '../CartContext';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="d-flex justify-content-between align-items-center border-bottom py-2">
              <div>
                <h5>{item.name}</h5>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <p>Kshs{item.price * item.quantity}</p>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button className="btn btn-outline-secondary mt-3" onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
