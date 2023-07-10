import React from "react";
import Axios from "axios";

import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";

import "react-notifications/lib/notifications.css";

class Logout extends React.Component {
  componentDidMount() {
    this.logoutUser();
  }
  logoutUser = () => {
    Axios.post(`${process.env.REACT_APP_API_HOST_URL}/auth/logout`, {})
      .then(() => {
        NotificationManager.info("", "Logged Out");
        setTimeout(function () {
          window.location.replace("/");
        }, 500);
      })
      .catch((error) => {
        console.log(error);
        NotificationManager.error(
          error.response.data.data,
          "Error logging Out"
        );
      });
  };

  render() {
    return (
      <div>
        <NotificationContainer />
      </div>
    );
  }
}
export default Logout;
