import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { // works
      main: '#165788',
      contrastText: '#fff',
    },
    secondary: { // works
      main: '#69BE28',
      contrastText: '#fff',
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Auth0Provider
          domain="kaarthik.auth0.com"
          clientId="E9Lgzy2t9JRFGniVvZHvnLMUVDiJfgCc"
          redirectUri={window.location.origin}
          cacheLocation="localstorage"
          scope="http://localhost:3000/"
        >
        <App />
      </Auth0Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
