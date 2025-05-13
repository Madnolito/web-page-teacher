import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './context/theme';


ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider theme={theme}>
    <HashRouter>
      <App /> 
    </HashRouter>
  </ThemeProvider>

);


reportWebVitals();
