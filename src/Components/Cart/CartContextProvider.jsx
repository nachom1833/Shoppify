import { useState, useEffect } from "react";
import CartContext from "./CartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(
    //agarra del local storage el cart para que al reiniciar la pagina no desaparezca.
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const addToCart = (product, quantity) => {
    //busca el producto en el carrito
    const itemInCart = cart.find((item) => item.product.id === product.id);
    //si existe, carga el producto con la nueva cantidad
    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.product.id === product.id) {
          return { product, quantity: item.quantity + quantity };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (productId, quantity) => {
    const itemInCart = cart.find((item) => item.product.id === productId);
    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.product.id === productId) {
          return { product: item.product, quantity: item.quantity - quantity };
        }
        return item;
      });

      const filteredCart = updatedCart.filter((item) => item.quantity > 0);

      setCart(filteredCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };
//contador que acumula la cantidad de cada item por el precio
  const cartTotal = cart
    .reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0)
    .toFixed(2);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
