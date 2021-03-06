import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css'; //NO requerido
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/tailwind.css'; //Very important for see the style in this view

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
