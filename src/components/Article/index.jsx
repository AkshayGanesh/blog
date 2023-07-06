import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import Axios from "axios";

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
        function(p, c) {
          return p + String.fromCharCode(c);
        },
        ""
      )
    );
    let mimetype = "image/jpeg";
    return "data:" + mimetype + ";base64," + b64encoded;
  }

  getThumbnailImage = (article_id) => {
    Axios.get(`${process.env.REACT_APP_API_HOST_URL}/api/articles/${article_id}/image`, {
      responseType: "arraybuffer",
    }).then((response) => {
      this.setState({ thumbnailImage: this._imageEncode(response.data) });
    });
  };

  render() {
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
        <header className="text-center mb-40">
          <h2>{this.props.article_header}</h2>
        </header>
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
