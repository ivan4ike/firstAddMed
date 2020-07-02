import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";

import { rootReducer } from "./redux/rootReducer";
import {createBrowserHistory} from 'history'
import { Provider } from "react-redux";

import { Router  } from "react-router-dom";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <App />
    </Router >
  </Provider>,
  document.getElementById("root")
);
