import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from "./context/AppContext";
import { store } from "./Redux/Store";
ReactDOM.render(
  <React.StrictMode>
    <AppProvider store={store}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
