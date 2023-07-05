import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Article extends React.Component {
  render() {
    return (
      <div
        // className="mt-90"
        style={{
          border: "#535353",
          "borderWidth": "thin",
          "borderStyle": "solid",
          "borderRadius": "10px",
        }}
      >
        <header className="text-center mb-40">
          <h2>{this.props.article_header}</h2>
        </header>
        <div className="link-color-default fs-12">
          <time>
            <h4>March 29, 2021</h4>
          </time>
        </div>

        <div>
          <img
            className="rounded"
            src="assets/img/blog-1.jpg"
            alt={this.props.article_header}
            width="80%"
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
