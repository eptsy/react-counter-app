import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  function inc() {
    setCount((count = count + 1));
  }
  function dec() {
    if (count > 0) {
      setCount((count = count - 1));
    } else {
      alert("reached limit 0");
    }
  }
  return (
    <div className="main">
      <h2>
        React Counter App <br /> React Project #2
      </h2>
      <h1>{count}</h1>
      <div className="btns">
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
      </div>
      <a href="https://github.com/irfanshadikrishad" target="_blank">
        github
      </a>
    </div>
  );
}

export default App;
