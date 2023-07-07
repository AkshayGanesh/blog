import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { validateAll } from "indicative/validator";
import Alert from "../Utilities/alerts";
import "./index.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      checkbox: "",
      postAlertType: "hide",
      postAlertMessage: "",
    };
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    const rules = {
      username: "required|string",
      password: "required|string",
    };
    const messages = {
      required: "The {{ field }} is required.",
    };

    validateAll(data, rules, messages)
      .then(() => {
        Axios.post(`${process.env.REACT_APP_API_HOST_URL}/api/auth/login`, {
          username: data.username,
          password: data.password,
        })
          .then((response) => {
            this.setState({
              postAlertType: "success",
              postAlertMessage: `User ${data.username} logged in successfully!`,
            });
            setTimeout(function() {
              window.location.replace("/");
            }, 2500);
          })
          .catch((error) => {
            this.setState({
              postAlertType: "error",
              postAlertMessage: `Error adding user: ${error}!`,
            });
          });
      })
      .catch(() => {});
  };
  render() {
    return (
      <div
        className="mh-fullscreen bg-img center-vh p-20"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-girl.jpg)`,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div class="layer">
          <div
            className="card card-shadowed p-50 w-400 mb-0"
            style={{ maxWidth: "100%" }}
          >
            <h5 className="text-uppercase text-center">Login</h5>
            <br />
            <br />
            <form className="form-type-material" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group flexbox py-10">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="checkbox"
                    onChange={this.handleInputChange}
                  />
                  <span className="custom-control-indicator" />
                  <span className="custom-control-description">
                    Remember me
                  </span>
                </label>
                <p className="text-muted hover-primary fs-13">
                  Forgot password?
                </p>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-bold btn-block btn-primary"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <hr className="w-30" />
            <p className="text-center text-muted fs-13 mt-20">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
          <br />
          <Alert
            type={this.state.postAlertType}
            message={this.state.postAlertMessage}
            parentCallback={this.handleAlertClose}
          />
        </div>
      </div>
    );
  }
}
export default Login;
