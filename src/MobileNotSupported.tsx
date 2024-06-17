// src/components/MobileNotSupported.tsx

import React from 'react';
import './MobileNotSupported.css'; // Importing CSS for styling

const MobileNotSupported: React.FC = () => {
  return (
    <div className="mobile-not-supported">
      <div className="message-container">
        <h1>Mobile Version Not Available 😢</h1>
        <p>Please use a desktop or laptop to view this site.</p>
      </div>
    </div>
  );
};

export default MobileNotSupported;
