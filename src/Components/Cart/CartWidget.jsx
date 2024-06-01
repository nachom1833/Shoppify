import { Link } from "react-router-dom";
import CartContext from "./CartContext";
import CartIcon from "./CartIcon";
import { useContext } from "react";

function CartWidget() {
    const { cart } = useContext(CartContext);
    //acc =acumulador recorre item por item y e suma la quantity al acumulador y el cero es el estado inicial
    const Quantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
      <div className="CartWidget">
          <Link to={"/cart"}>
        <CartIcon Ancho={"30px"} Alto={"24px"} />
    </Link>
        <span className="CantidadDeProductos">{Quantity}</span>
      </div>
  );
}
export default CartWidget;
