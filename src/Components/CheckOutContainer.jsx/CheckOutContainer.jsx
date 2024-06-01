import { useContext } from "react";
import CartContext from "../Cart/CartContext";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import CartDetails from "../Cart/CartDetails";
import useBuyer from "../../hooks/useBuyer";
import "./checkOutContainer.css"

export default function CheckoutContainer() {
  const { cart, clearCart, cartTotal } = useContext(CartContext);
  const { buyer, handleInputChange } = useBuyer();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      cart,
      cartTotal,
    };

    const db = getFirestore();

    for (const itemInCart of cart) {
      const productRef = doc(db, "Items", itemInCart.product.id);
      const product = await getDoc(productRef);
      const productData = product.data();
      if (productData.stock < itemInCart.quantity) {
        alert(`No hay stock suficiente para el producto ${productData.title}`);
        return;
      }
    }

    const ordersCollection = collection(db, "Ventas");

    addDoc(ordersCollection, order).then(async ({ id }) => {
      alert(`Compra realizada con éxito, tu número de orden es: ${id}`);
      clearCart();

      for (const itemInCart of cart) {
        const productRef = doc(db, "Items", itemInCart.product.id);
        const product = await getDoc(productRef);
        const productData = product.data();
        const newStock = productData.stock - itemInCart.quantity;
        await updateDoc(productRef, { stock: newStock });
      }
    });
  };

  return (
    <div className="checkout-container">
      <form onSubmit={handleSubmit} className="checkout-form" action="/">
        <div className="form-group">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            placeholder="Nombre del comprador"
            className="form-input"
            name="name"
            value={buyer.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            placeholder="email"
            className="form-input"
            name="email"
            value={buyer.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Apellido</label>
          <input
            type="text"
            placeholder="Apellido"
            className="form-input"
            name="lastName"
            value={buyer.lastName}
            onChange={handleInputChange}
          />
        </div>
        <CartDetails cart={cart} cartTotal={cartTotal} />
        <button className="checkout-button" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
}
