import React from 'react';
import ReactDOM from 'react-dom/client';  
import App from './App';
import UserContextProvider from './Context/UserContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Use createRoot

root.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
