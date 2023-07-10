import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";

import "./index.css";
import "react-notifications/lib/notifications.css";

class Article extends React.Component {
  state = {
    thumbnailImage: "",
  };
  componentDidMount() {
    this.getThumbnailImage(this.props.article_id);
  }
  _imageEncode(arrayBuffer) {
    let b64encoded = btoa(
      [].reduce.call(
        new Uint8Array(arrayBuffer),
        function (p, c) {
          return p + String.fromCharCode(c);
        },
        ""
      )
    );
    let mimetype = "image/jpeg";
    return "data:" + mimetype + ";base64," + b64encoded;
  }

  getThumbnailImage = (article_id) => {
    Axios.get(
      `${process.env.REACT_APP_API_HOST_URL}/articles/${article_id}/image`,
      {
        responseType: "arraybuffer",
      }
    )
      .then((response) => {
        this.setState({ thumbnailImage: this._imageEncode(response.data) });
      })
      .catch(() => {
        this.setState({
          thumbnailImage: "/assets/img/tn-unavailable.jpg",
        });
      });
  };

  iconDropDownToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <BsThreeDotsVertical
        variant="success"
        id="dropdown-basic"
        onMouseOver={({ target }) => (target.style.color = "#46B9F6")}
        onMouseOut={({ target }) => (target.style.color = "black")}
      />
      {children}
    </a>
  ));

  handleDropDownActions = (selectedDropDown) => {
    if (selectedDropDown === "delete") {
      if (window.confirm("Are you sure you want to delete the article?")) {
        Axios.post(`${process.env.REACT_APP_API_HOST_URL}/articles/delete`, {
          article_id: this.props.article_id,
        })
          .then((response) => {
            NotificationManager.info("Article Deleted!");
            setTimeout(function () {
              window.location.reload(false);
            }, 1000);
          })
          .catch((error) => {
            console.log(error);
            NotificationManager.error(
              error.response.data.detail,
              "Error Deleting article"
            );
          });
      }
    }
    if (selectedDropDown === "edit") {
      NotificationManager.info("Feature not added yet 😅", "Coming soon!");
    }
  };

  render() {
    let dropDownMenu = null;
    if (this.props.authentication_info.authenticated) {
      dropDownMenu = (
        <Dropdown onSelect={this.handleDropDownActions}>
          <Dropdown.Toggle
            as={this.iconDropDownToggle}
            id="dropdown-custom-components"
          />
          <Dropdown.Menu>
            <Dropdown.Item eventKey="edit">Edit</Dropdown.Item>
            <Dropdown.Item eventKey="delete">Delete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }
    return (
      <div
        // className="mt-90"
        style={{
          border: "#535353",
          borderWidth: "thin",
          borderStyle: "solid",
          borderRadius: "10px",
          width: "600px",
          // height: "500px"
        }}
      >
        <NotificationContainer />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h2>{this.props.article_header}</h2>
          {dropDownMenu}
        </div>
        <div className="link-color-default fs-12">
          <time>
            <h4>{this.props.article_date}</h4>
          </time>
        </div>
        <div>
          <img
            className="rounded"
            // src="assets/img/blog-1.jpg"
            src={this.state.thumbnailImage}
            alt={this.props.article_header}
            width="400on"
          />
          {/* <p className="text-justify">
            This is a placeholder
          </p> */}
          <p className="text-center mt-40">
            <Link
              className="btn btn-primary btn-round"
              to={`/article/${this.props.article_id}`}
            >
              Read more
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Article;
