/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Contato from './pages/contato';


//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
    (

      <Router>
        <App>
          <HashRouter>
            <Route exact path="/" component={Home} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/contato" component={Contato} />
          </HashRouter>
        </App>
      </Router>

    ),
    document.getElementById('root')

);