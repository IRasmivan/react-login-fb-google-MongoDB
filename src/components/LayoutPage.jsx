import FooterPage from "./FooterPage";
import NavbarPage from "./NavbarPage";
import React, { Component } from "react";

class LayoutPage extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        {this.props.children}
        <FooterPage />
      </div>
    );
  }
}

export default LayoutPage;
