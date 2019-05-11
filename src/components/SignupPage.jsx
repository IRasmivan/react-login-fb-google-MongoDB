import React, { Component } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

class SignupPage extends Component {
  goToSignIn = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <MDBContainer>
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4 mt-4">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <form>
                  <p className="h4 text-center mb-5">Sign up</p>
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterEmailEx"
                    className="grey-text"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="defaultFormRegisterEmailEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterConfirmEx"
                    className="grey-text"
                  >
                    Confirm your email
                  </label>
                  <input
                    type="email"
                    id="defaultFormRegisterConfirmEx"
                    className="form-control"
                  />
                  <br />
                  <label
                    htmlFor="defaultFormRegisterPasswordEx"
                    className="grey-text"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="defaultFormRegisterPasswordEx"
                    className="form-control"
                  />
                  <div className="text-center mt-4">
                    <MDBBtn
                      gradient="blue"
                      type="submit"
                      rounded
                      className="white-text text-center"
                    >
                      Register
                    </MDBBtn>
                    <MDBBtn
                      gradient="white"
                      type="submit"
                      rounded
                      onClick={this.goToSignIn}
                      className="blue-text text-center"
                    >
                      Cancel
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default SignupPage;
