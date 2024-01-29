import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './Context';
//Librerias
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
      <BrowserRouter>
        <Context>
          <App />
        </Context>
      </BrowserRouter>,
  document.getElementById('root')
);
