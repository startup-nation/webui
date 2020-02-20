import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  BrowserRouter } from 'react-router-dom';
 import Materializecss from '../node_modules/materialize-css/dist/css/materialize.min.css';
 import Materializejs from '../node_modules/materialize-css/dist/js/materialize.min.js';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
     document.getElementById('root')
     );


