import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../redux/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <section className="empty-cart">
        <h1>Your Cart is Empty 🛒</h1>
        <p>Add some products to continue shopping.</p>
      </section>
    );
  }

  return (
    <section className="page">
      <h1>Shopping Cart</h1>

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />

          <div>
            <h3>{item.title}</h3>

            <p>${item.price}</p>

            <button
              onClick={() =>
                dispatch(decreaseQuantity(item.id))
              }
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                dispatch(increaseQuantity(item.id))
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch(removeFromCart(item.id))
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>

        <button
          className="danger-btn"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </section>
  );
}

export default Cart;