import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';


ReactDOM.render(
  <Router>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);
