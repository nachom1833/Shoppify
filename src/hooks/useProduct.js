import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();

      if (id) {
        try {
          const productRef = doc(db, "Items", id);
          const docSnapshot = await getDoc(productRef);

          if (docSnapshot.exists()) {
            setProduct({
              id: docSnapshot.id,
              ...docSnapshot.data(),
            });
          } else {
            console.log("No such document!");
            setProduct(null);
          }
        } catch (error) {
          console.error("Error fetching product:", error);
          setProduct(null);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.log("No ID provided.");
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, isLoading };
}
