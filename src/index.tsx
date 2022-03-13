import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Contexts/Auth/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
        <GlobalStyles/>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
