
import CartWidget from "./CartWidget";
import CategoryList from "./CategoryList";



function Navbar  ()  {
  return (
    <nav className="NavBar">
       <CategoryList/>
       <CartWidget/>      
    </nav>
  );
};
export default Navbar;