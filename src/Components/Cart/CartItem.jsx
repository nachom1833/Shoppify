import { useContext } from "react";
import CartContext from "./CartContext";
import "../Cart/css/cartItem.css";

export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div className="cart-item-container">
      <div className="item-cart-container">
        <div className="item-img-container">
          <img src={item.product.image} alt={item.product.title} />
        </div>
        <div className="item-description-container">
          <p>{item.product.title}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.product.price}</p>
        </div>
      </div>
      <div className="item-buttons-container">
        <button
          className="item-button"
          onClick={() => removeFromCart(item.product.id, 1)}
          type="button"
        >
          -
        </button>
        <button
          className="item-button"
          onClick={() => addToCart(item.product, 1)}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
}
