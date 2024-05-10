import "./Item.css";
import useCounter from "../../hooks/useCounter";
import ItemCounter from "../ItemCounter/ItemCounter";
import "../../mocks/mockAsync";
import { NavLink, unstable_HistoryRouter, useParams } from "react-router-dom";

export default function Item({ item }) {
  const { counter, increment, decrement } = useCounter(0);
  const onAdd = (nombreDeItem, cantidadaLlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadaLlevar: ", cantidadaLlevar);
  };
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
      <ItemCounter
        stock={item.stock}
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
      <div className="item--cart__container">
        <button
          className="item--cart__button"
          onClick={() => onAdd(item, count)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
