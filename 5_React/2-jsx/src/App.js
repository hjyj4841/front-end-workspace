import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const plusNum = () => {
    setCount(count + 10);
  };
  const minusNum = () => {
    setCount(count - 10);
  };
  const resetNum = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Total Click : {count}</h1>
      <button onClick={plusNum}>+10</button>
      <button onClick={minusNum}>-10</button>
      <button onClick={resetNum}>reset</button>
    </div>
  );
};

export default App;
