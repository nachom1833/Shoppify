import "./nav_bar.css";
import CartWidget from "../Cart/CartWidget";
import CategoryList from "../CategoryList/CategoryList";



function Navbar  ()  {
  return (
    <nav className="NavBar">
       <CategoryList/>
       <CartWidget/>      
    </nav>
  );
};
export default Navbar;