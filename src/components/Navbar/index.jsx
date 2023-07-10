import React from "react";
import { Link, NavLink } from "react-router-dom";
import Axios from "axios";

class Navbar extends React.Component {
  state = {
    authenticated: false,
    name: "",
  };

  componentDidMount() {
    this.getNavbarInfo();
  }

  getNavbarInfo = () => {
    Axios.get(`${process.env.REACT_APP_API_HOST_URL}/welcome/nav`)
      .then((response) => {
        if (response.data.name) {
          this.setState({ authenticated: true, name: response.data.name });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const authenticated = this.state.authenticated;
    let article_options;
    let user_options;

    if (authenticated) {
      article_options = (
        <div>
          <li className="nav-item">
            <a className="nav-link" href>
              Articles
              <span> </span>
              <i className="fa fa-caret-down" />
            </a>
            <div className="nav-submenu">
              <NavLink className="nav-link" to="/articles/myarticles">
                My Articles
              </NavLink>
              <NavLink className="nav-link" to="/articles/create">
                Write New Article
              </NavLink>
            </div>
          </li>
        </div>
      );
      user_options = (
        <div>
          <li className="nav-item">
            <a className="nav-link" href>
              Hello {this.state.name}!<span> </span>
              <i className="fa fa-caret-down" />
            </a>
            <div className="nav-submenu">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </div>
          </li>
        </div>
      );
    } else {
      user_options = (
        <div>
          <li className="nav-item">
            <a className="nav-link" href>
              Hello Guest!
              <span> </span>
              <i className="fa fa-caret-down" />
            </a>
            <div className="nav-submenu">
              <ul className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </ul>
            </div>
          </li>
        </div>
      );
    }
    return (
      <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
        <div className="container">
          <div className="topbar-left">
            <button className="topbar-toggler">☰</button>
            <Link className="topbar-brand" to="/">
              <img
                className="logo-default"
                src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
                alt="logo"
              />
              <img
                className="logo-inverse"
                src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`}
                alt="logo"
              />
            </Link>
          </div>
          <div className="topbar-right">
            <ul className="topbar-nav nav">
              <div className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </div>
              <div className="nav-item">{article_options}</div>
              <div className="nav-item">{user_options}</div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
