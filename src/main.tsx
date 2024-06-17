import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Analytics } from "@vercel/analytics/react"


ReactDOM.render(
  <Router>
    <Analytics />
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);
