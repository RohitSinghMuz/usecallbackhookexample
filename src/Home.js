import React, { useCallback, useState } from "react";
import Child from "./Child";

const Home = () => {
  const [count, setCount] = useState(0);
  const [decrvalue, Setdecrvalue] = useState(100);
  const callbackfun = useCallback(() => {}, [count]);
  return (
    <>
      <div>
        <Child callbackfun={callbackfun} count={count} />
        <h2>Home Page</h2>
        <button onClick={() => setCount(count + 2)}>Increment</button>
        <h2>Count:{count}</h2>
        <button onClick={() => Setdecrvalue(decrvalue - 2)}>Decrement</button>
        <h2>decrvalue:{decrvalue}</h2>
      </div>
    </>
  );
};

export default Home;
