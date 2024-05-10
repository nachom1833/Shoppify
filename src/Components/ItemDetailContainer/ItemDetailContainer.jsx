import useCounter from "../../hooks/useCounter";
import ItemCounter from "../ItemCounter/ItemCounter";
import "../../mocks/mockAsync";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

export default function ItemDetailContainer() {
  const { counter, increment, decrement } = useCounter(0);
  const { id } = useParams();

  const { product, isLoading } = useProduct(parseInt(id));
  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  const onAdd = (nombreDeItem, cantidadaLlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadaLlevar: ", cantidadaLlevar);
  };
 
  return (
    <div className="item-container">
      <div className="item_img-container">
        <img className="item_img" src={product.image} alt={product.title} />
      </div>
      <h2 className="item_title">{product.title}</h2>
      <p className="item_description">{product.description}</p>
      <p className="item_price">${product.price}</p>
      <ItemCounter
        stock={product.stock}
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
