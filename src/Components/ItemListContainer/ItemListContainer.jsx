import ItemList from "../ItemList/ItemList.jsx";
import useProducts from "../../hooks/useProducts.js";
import { useParams } from "react-router-dom";


export default function ItemListContainer({}) {
  const { category } = useParams();
  const { products, isLoading } = useProducts(category);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="ItemListContainer">
      <ItemList products={products} />
    </div>
  );
}
