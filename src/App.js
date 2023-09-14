import React, { useState } from "react";

function App() {
  const [state, setState] = useState('');

  return (
    <>
      <input value={state} onChange={(e) => setState(e.target.value)} />
      <h1>Hello World!!!!</h1>
      <h2>... ... and React!</h2>
    </>
  );
};

export default App;
