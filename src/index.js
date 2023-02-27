import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import ContextWrapper from './context/contextWrapper';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </ContextWrapper>
  </React.StrictMode>
);

