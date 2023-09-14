import React, { useState } from "react";

function App() {
  const [state, setState] = useState('');

  console.log(111);
  console.log(222);
  console.log(333);

  return (
    <>
      <p>Some text!!!</p>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <h1>Hello World!!!!</h1>
      <h2>... .... and React!</h2>
    </>
  );
};

export default App;
