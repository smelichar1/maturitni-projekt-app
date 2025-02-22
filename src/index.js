import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fontsource/poppins"; // Importuje výchozí váhu (400)
import "@fontsource/poppins/300.css"; // Lehčí váha
import "@fontsource/poppins/600.css"; // Středně tučné
import "@fontsource/poppins/700.css"; // Tučné

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
