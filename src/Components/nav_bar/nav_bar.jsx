import "./nav_bar.css";
import CartWidget from "../Cart/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import { useContext } from "react";
import CartContext from "../Cart/CartContext";


function Navbar  ()  {
  const { cart } = useContext(CartContext);
  return (
    <nav className="NavBar">
       <CategoryList/>
       <div className={`${cart.length === 0 ? "hidden" : ""}`}>
       <CartWidget />      
       </div>
    </nav>
  );
};
export default Navbar;