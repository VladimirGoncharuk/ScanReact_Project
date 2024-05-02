import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './fonts/ferry_black.otf';
import './fonts/Inter-Medium.otf';
import './fonts/Inter-Regular.otf';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
