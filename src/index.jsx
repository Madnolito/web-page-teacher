import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


import { ThemeProvider } from '@mui/material';
import theme from './context/theme';


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </ThemeProvider>
</React.StrictMode>
);


reportWebVitals();
