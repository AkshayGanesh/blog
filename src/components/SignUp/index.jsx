import React from "react";
import Axios from "axios";
import { validateAll } from "indicative/validator";

import Alert from "../Utilities/alerts";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: [],
      postAlertType: "hide",
      postAlertMessage: "",
    };
  }

  handleAlertClose = () => {
    this.setState({
      postAlertType: "hide",
      postAlertMessage: "",
    });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // validating user data
    const data = this.state;
    const rules = {
      username: "required|string",
      email: "required|email",
      password: "required|string|min:6|confirmed",
    };

    const messages = {
      required: "The {{ field }} is required.",
      "password.confirmed": "The password confirmation does not match.",
    };
    validateAll(data, rules, messages)
      .then(() => {
        //successfull login
        Axios.post(`${process.env.REACT_APP_API_HOST_URL}/api/auth/register`, {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        })
          .then((response) => {
            this.setState({
              postAlertType: "success",
              postAlertMessage: `User ${response.data.data} added successfully!`,
            });
            setTimeout(function() {
              window.location.replace("/");
            }, 2500);
          })
          .catch((error) => {
            this.setState({
              postAlertType: "success",
              postAlertMessage: `Error adding user: ${error}!`,
            });
          });
      })
      .catch((errors) => {
        const formattedErrors = {};
        errors.forEach(
          (error) => (formattedErrors[error.field] = error.message)
        );
        this.setState({
          errors: formattedErrors,
        });
      });
  };
  render() {
    return (
      <div
        className="mh-fullscreen bg-img center-vh"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-girl.jpg)`,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className="card card-shadowed p-50 w-400 mb-0"
          style={{ maxWidth: "100%" }}
        >
          <h5 className="text-uppercase text-center">Register</h5>
          <br />
          <br />
          <form className="form-type-material" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Username"
                onChange={this.handleInputChange}
              />
              {this.state.errors["name"] && (
                <small className="text-danger">
                  {this.state.errors["name"]}
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Email address"
                onChange={this.handleInputChange}
              />
              {this.state.errors["email"] && (
                <small className="text-danger">
                  {this.state.errors["email"]}
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
              {this.state.errors["password"] && (
                <small className="text-danger">
                  {this.state.errors["password"]}
                </small>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password_confirmation"
                placeholder="Password (confirm)"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <button
              className="btn btn-bold btn-block btn-primary"
              type="submit"
            >
              Register
            </button>
          </form>
          <hr className="w-30" />
          <p className="text-center text-muted fs-13 mt-20">
            Already have an account?
            <a href="login.html">Sign in</a>
          </p>
        </div>
        <br />
        <Alert
          type={this.state.postAlertType}
          message={this.state.postAlertMessage}
          parentCallback={this.handleAlertClose}
        />
      </div>
    );
  }
}

export default SignUp;
