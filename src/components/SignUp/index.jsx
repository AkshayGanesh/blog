import React from "react";
import Axios from "axios";
import { validateAll } from "indicative/validator";
import { Link } from "react-router-dom";

import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import encryptMessage from "../Utilities/aes";

import "react-notifications/lib/notifications.css";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: [],
    };
  }

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
      name: "required|string",
      email: "required|email",
      password: "required|string|min:6|confirmed",
    };

    const messages = {
      required: "The {{ field }} is required.",
      "password.confirmed": "The password confirmation does not match.",
    };
    validateAll(data, rules, messages)
      .then(() => {
        const encrypted_password = encryptMessage(this.state.password);
        Axios.post(`${process.env.REACT_APP_API_HOST_URL}/auth/register`, {
          name: this.state.name,
          email: this.state.email,
          password: encrypted_password,
        })
          .then(() => {
            NotificationManager.success(
              `User ${this.state.name} added!`,
              "Success"
            );
            setTimeout(function () {
              window.location.replace("/");
            }, 1000);
          })
          .catch((error) => {
            NotificationManager.error(
              error.response.data.detail[0],
              "Error adding user"
            );
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
        <NotificationContainer />
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
                placeholder="Name"
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
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </p>
        </div>
        <br />
      </div>
    );
  }
}

export default SignUp;
