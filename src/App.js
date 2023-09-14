import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(111);
  }, [])

  return (
    <>
      <h1>Hello World!</h1>
      <h2>... and React!</h2>
    </>
  );
};

export default App;
