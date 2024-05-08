import ItemList from "../ItemList/ItemList.jsx";
import useProducts from "../../hooks/useProducts.js";
import { useParams } from "react-router-dom";
import useCategory from "../../hooks/useCategory.js";

export default function ItemListContainer({ bienvenida }) {
  const { category } = useParams();

  if (category != null) {
    const { products, isLoading } = useCategory(category);

    if (isLoading) {
      return <h1>Cargando...</h1>;
    }

    return (
      <div className="ItemListContainer">
        <h1>{bienvenida}</h1>
        <ItemList products={products} />
      </div>
    );
  } else {
    const { products, isLoading } = useProducts();
    if (isLoading) {
      return <h1>Cargando...</h1>;
    }

    return (
      <div className="ItemListContainer">
        <h1>{bienvenida}</h1>
        <ItemList products={products} />
      </div>
    );
  }
}
