import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavbarPage from "./components/NavbarPage";
import LoginPage from "./components/LoginPage";
import FooterPage from "./components/FooterPage";
import SignupPage from "./components/SignupPage";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        <LoginPage />
        <FooterPage />
        {/* <Projects />
            <Blog /> */}
      </div>
    );
  }
}
export default App;
