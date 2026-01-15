import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [rCount, setRCount] = useState(10);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>Counter: {rCount}</h1>
      <button onClick={() => setRCount(rCount - 1)}>-</button>
    </div>
  );
};

export default Counter;
