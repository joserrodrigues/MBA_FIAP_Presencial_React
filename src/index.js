import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import serviceWorker from './serviceworker';

import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/routes";
import { InfoContextProvider } from './store/InfoContext';


ReactDOM.render(
  <BrowserRouter>
    <InfoContextProvider>
      <Router />
    </InfoContextProvider>,    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.registerServiceWorker();