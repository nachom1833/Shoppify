import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <div className="Itemlist">
      {products.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
}
