import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppContextProvider } from './context/AppContext';
import App from './App';
import 'bulma/css/bulma.min.css';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </StrictMode>
);

