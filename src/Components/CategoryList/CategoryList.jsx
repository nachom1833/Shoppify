import "./CategoryList.css";
import { NavLink } from "react-router-dom";
function CategoryList() {
  return (
    <div>
      <ul className="CategoryList">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/products"}
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/category/mensClothing"}
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/category/jewelery"}
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/category/electronics"}
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Electronics
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default CategoryList;
