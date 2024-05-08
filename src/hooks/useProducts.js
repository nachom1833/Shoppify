import { useEffect, useState } from "react";
import { getProducts } from "../mocks/mockAsync";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, );
  return { products, isLoading };
}
