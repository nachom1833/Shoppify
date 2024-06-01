import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function useProducts(category) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const productsCollection = collection(db, "Items");
    if (category) {
      const productsQuery = query(
        productsCollection,
        where("category", "==", category)
      )
      getDocs(productsQuery)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      })
      .finally(() => setIsLoading(false));
  }else {
    getDocs(productsCollection)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      })
      .finally(() => setIsLoading(false));
  }
}, [category]);

return { products, isLoading };
}

