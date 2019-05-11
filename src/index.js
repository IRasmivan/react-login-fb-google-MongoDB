import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { Router, Route, browserHistory } from "react-router";

import LoginPage from "./components/LoginPage";
import LayoutPage from "./components/LayoutPage";
import SignupPage from "./components/SignupPage";
ReactDOM.render(
  <LayoutPage>
    <Router>
      <div>
        <Route exact path="/" component={LoginPage} />
        <Route path="/SignupPage" component={SignupPage} />
      </div>
    </Router>
  </LayoutPage>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
