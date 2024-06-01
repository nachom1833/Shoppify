import { useContext } from "react";
import CartContext from "./CartContext";
import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";
import "../Cart/css/cartContainer.css"

export default function CartContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);

  return (
    <div className="cart-container">
      <div className="cart-container_details-container">
        <h2 className="cart-container_title">Cart</h2>
        {cart.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          <CartDetails cart={cart} cartTotal={cartTotal} />
        )}
      </div>
      <div className="cart-container_buttons">
        <button
          className="cart-container_button-clear"
          onClick={clearCart}
        >
          Limpiar carrito
        </button>
        <Link
          className="cart-container_link"
          to="/checkout"
        >
          Terminar mi compra
        </Link>
      </div>
    </div>
  );
}
