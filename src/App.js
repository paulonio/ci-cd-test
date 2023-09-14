import React, { useState } from "react";

function App() {
  const [state, setState] = useState('');

  console.log(555);
  console.log(777);
  console.log(888);
  console.log(999);

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
