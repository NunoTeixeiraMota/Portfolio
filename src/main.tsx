import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { Analytics } from '@vercel/analytics/react';

const container = document.getElementById('root');

// Check if container exists before creating root
if (container) { 
  const root = createRoot(container);
  root.render(
    <Router>
      <Analytics />
      <React.StrictMode>
        <App /> 
      </React.StrictMode>
    </Router>
  );
} else {
  // Handle the case where the root element is not found
  console.error('Error: Could not find root element for React.');
}