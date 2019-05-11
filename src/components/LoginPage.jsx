import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
  MDBView,
  MDBMask
} from "mdbreact";
import { withRouter } from "react-router-dom";
import FacebookAuth from "react-facebook-auth";

class LoginPage extends Component {
  handleClick = () => {
    this.props.history.push("/SignupPage");
  };

  MyFacebookButton = ({ onClick }) => (
    <MDBBtn
      type="button"
      color="blue"
      rounded
      className="mr-md-3 z-depth-1a"
      onClick={onClick}
    >
      <MDBIcon fab icon="facebook-square" className="white-text text-center" />{" "}
      Log in with Facebook
    </MDBBtn>
  );

  authenticate = response => {
    console.log(response);
    // Api call to server so we can validate the token
  };
  render() {
    return (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4 mt-4">
            <MDBCard mb="10">
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <p className="h4 dark-grey-text mb-5">Sign in</p>
                </div>
                <MDBInput
                  label="Your email"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  Forgot
                  <a href="#!" className="blue-text ml-1">
                    Password?
                  </a>
                </p>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="white-text btn-block z-depth-1a"
                  >
                    Sign in
                  </MDBBtn>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                  or Sign in with:
                </p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn
                    type="button"
                    color="white"
                    rounded
                    className="mr-md-3 z-depth-1a"
                    onClick
                  >
                    <MDBIcon fab icon="google-plus-g" className="red-text" />{" "}
                    Log in with Google
                  </MDBBtn>
                  <FacebookAuth
                    appId="589163491580713"
                    callback={this.authenticate}
                    component={this.MyFacebookButton}
                  />
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <a
                    onClick={this.handleClick}
                    href="#!"
                    className="blue-text ml-1"
                  >
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LoginPage;
