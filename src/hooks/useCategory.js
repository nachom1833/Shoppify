import { useEffect, useState } from "react";
import { getProductsByCategory } from "../mocks/mockAsync";

export default function useCategory(category) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory(category)
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, [category]);
  return { products, isLoading };
}
