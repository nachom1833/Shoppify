import "./Item.css";
import { NavLink } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div className="item-container">
      <div className="item_img-container">
        <NavLink to={`/item/${item.id}`}>
          <img className="item_img" src={item.image} alt={item.title} />
        </NavLink>
      </div>
      <h2 className="item_title">{item.title}</h2>
      <p className="item_description">{item.description}</p>
      <p className="item_price">${item.price}</p>
      
    </div>
  );
}
