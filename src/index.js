import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App>
    {/* Bad practice */}
    <h1>
      This is a title!
    </h1>
  </App>
);