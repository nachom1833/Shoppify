import { useState } from "react";
export default function useCounter(initialState = 0) {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const restart =()=>{
    setCounter(initialState);
  }
  return { counter, increment, decrement , restart };
}
