import { useEffect, useState } from "react";
import { getProductById } from "../mocks/mockAsync";

export default function useProduct(id) {
  const [product, setProduct] = useState(undefined);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, [id]);
  return { product, isLoading };
}
