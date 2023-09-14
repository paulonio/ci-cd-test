import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('master');
console.log(111);
console.log(222);

root.render(
  <React.StrictMode>
    <App />
    <p>Some index text</p>
  </React.StrictMode>
);

