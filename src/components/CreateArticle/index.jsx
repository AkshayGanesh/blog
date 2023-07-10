import React from "react";
import Axios from "axios";
import FormData from "form-data";

import Banner from "./../Banner";
import Editor from "./editor";
import LoadingSpinner from "../Utilities/loadingSpinner";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";

import "react-notifications/lib/notifications.css";

class CreateArticle extends React.Component {
  state = {
    article_body: "",
    article_header: "",
    thumbnailImage: null,
    isLoading: false,
    articleData: new FormData(),
  };

  addArticleBody = (childData) => {
    this.setState({ article_body: childData });
  };

  addArticleHeader = (event) => {
    this.setState({ article_header: event.target.value });
  };

  addArticleThumbnail = (event) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({ image: URL.createObjectURL(event.target.files[0]) });
      this.setState({ thumbnailImage: event.target.files[0] });
    }
  };

  sendEditorData = () => {
    this.setState({ isLoading: true });
    this.state.articleData.append("thumbnailImage", this.state.thumbnailImage);
    this.state.articleData.append("article_header", this.state.article_header);
    this.state.articleData.append("article_body", this.state.article_body);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    Axios.post(
      `${process.env.REACT_APP_API_HOST_URL}/articles/create`,
      this.state.articleData,
      config
    )
      .then(() => {
        this.setState({ isLoading: false });
        NotificationManager.success("Article added successfully!", "Success");
        setTimeout(
          function () {
            this.setState({ isLoading: false });
            this.setState({ image: null });
            window.location.replace("/");
          }.bind(this),
          2000
        );
      })
      .catch(() => {
        this.setState({ isLoading: false });
        this.setState({ image: null });
        NotificationManager.error("Error adding article!", "Error");
      });
  };

  render() {
    const renderEditor = (
      <div>
        <Banner
          backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
          title="Write an Article"
        />
        {/* END Header */}
        {/* Main container */}
        <main className="main-content">
          <section className="section">
            <div className="container">
              <NotificationContainer />
              <div className="col-12 col-lg-12">
                <label className="form-label d-flex">Article Title</label>
                <input
                  className="form-control form-control-lg"
                  style={{
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderColor: "#535353",
                  }}
                  type="text"
                  placeholder=""
                  autoFocus={true}
                  required={true}
                  onChange={this.addArticleHeader}
                />
                <br />
                <div className="mb-3">
                  <label className="form-label d-flex">Upload thumbnail</label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    accept="image/*"
                    onChange={this.addArticleThumbnail}
                  />
                  {this.state.image ? (
                    <div className="col-12 col-lg-12">
                      <br />
                      <label className="form-label d-flex">
                        Thumbnail Preview
                      </label>
                      <img
                        alt="thumbnail preview"
                        src={this.state.image}
                        height={250}
                      />
                      <br />
                    </div>
                  ) : null}
                </div>
                <br />
                <label className="form-label d-flex">Article Body</label>
                <Editor parentCallback={this.addArticleBody} />
                <br />
                <div className="text-center">
                  <button
                    className="btn btn-lg btn-primary"
                    type="submit"
                    form="createArticle"
                    onClick={this.sendEditorData}
                  >
                    Create Article
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
    return (
      <div>{this.state.isLoading ? <LoadingSpinner /> : renderEditor}</div>
    );
  }
}
export default CreateArticle;
