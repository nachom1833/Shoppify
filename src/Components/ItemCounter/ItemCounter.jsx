import "./ItemCounter.css"
export default function ItemCounter({
  stock,
  counter,
  increment,
  decrement,
}) {
  return (
    <div className="Item-counter_Container">
      <div className="Item-counter-count_Container">
        <button
          className="Item-counter-button"
          onClick={decrement}
          disabled={counter == 0}
        >
          -
        </button>
        <span className="Item-counter-span">{counter}</span>
        <button
          className="Item-counter-button"
          onClick={increment}
          disabled={counter >= stock}
        >
          +
        </button>
      </div>
    </div>
  );
}
