import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app/App';

import './index.css';

import MainContextProvider  from './context/MainContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </Router>
)
