import { CssBaseline, ThemeProvider } from '@mui/material';
import { initializeApp } from 'firebase/app';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { DialogProvider } from 'react-dialog-async';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { AuthProvider } from './components/auth/AuthProvider';

import reportWebVitals from './reportWebVitals';
import theme from './theme';
import { firebaseConfig } from './utils/firebaseConfig';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <BrowserRouter>
          <SnackbarProvider maxSnack={3}>
            <AuthProvider firebaseApp={app}>
              <DialogProvider>
                <App />
              </DialogProvider>
            </AuthProvider>
          </SnackbarProvider>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
