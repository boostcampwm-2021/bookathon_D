import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import regeneratorRuntime from 'regenerator-runtime';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = '';
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
