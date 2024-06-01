import CartItem from "./CartItem";
import "../Cart/css/cartDetail.css"
export default function CartDetails({ cart, cartTotal }) {
  return (
    <>
      <div className="cart-detail_container">
        {cart.length === 0 ? (
          <h1>No hay productos en el carrito</h1>
        ) : (
          cart.map((item) => {
            return <CartItem key={item.product.id} item={item} />;
          })
        )}
      </div>
      <h3 className="cart-detail_total">Total: ${cartTotal}</h3>
    </>
  );
}
