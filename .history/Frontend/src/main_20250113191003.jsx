import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import App from './App.jsx'
import { store } from './Store';
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
      <App />
    </Provider>,
  </StrictMode>,
)
