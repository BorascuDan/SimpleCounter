import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function clic() {
    setCount(count + 1);
  }

  function clic2() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={clic}>+</button>
      <button onClick={clic2}>-</button>
    </div>
  );
}

export default App;
