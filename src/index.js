import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxStore from "./reduxstore/ReduxStore";

import Dashboard from './components/Dashboard';

const app = (
  <Provider store={ReduxStore}>
    <HashRouter>
      <Route path="/" exact component={App} />
      <Route path="/dashboard" component={Dashboard} />
    </HashRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
