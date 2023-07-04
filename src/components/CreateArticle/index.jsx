import React from "react";

import Banner from "./../Banner";
import Alert from "./alerts";
import Editor from "./editor";
import Axios from "axios";
import LoadingSpinner from "../config/loadingSpinner";

class CreateArticle extends React.Component {
  state = {
    msg: "",
    postAlertType: "hide",
    postAlertMessage: "",
    isLoading: false,
  };

  handleCallback = (childData) => {
    this.setState({ msg: childData });
  };

  handleAlertClose = () => {
    this.setState({
      postAlertType: "hide",
      postAlertMessage: "",
    });
  };

  sendEditorData = () => {
    this.setState({ isLoading: true });
    Axios.post("http://localhost:8000/api/articles/create", {
      article: this.state.msg,
    })
      .then(() => {
        this.setState({ isLoading: false });
        this.setState({
          postAlertType: "success",
          postAlertMessage: "Article added successfully!",
        });
        setTimeout(function () {
          window.location.replace("/");
        }, 1000);
      })
      .catch(() => {
        this.setState({ isLoading: false });
        this.setState({
          postAlertType: "error",
          postAlertMessage: "Error adding article!",
        });
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
              <div className="row">
                <div className="col-12 col-lg-12">
                  <Editor parentCallback={this.handleCallback} />
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
              <Alert
                type={this.state.postAlertType}
                message={this.state.postAlertMessage}
                parentCallback={this.handleAlertClose}
              />
            </div>
          </section>
        </main>
        {/* END Main container */}
      </div>
    );
    return (
      <div>{this.state.isLoading ? <LoadingSpinner /> : renderEditor}</div>
    );
  }
}
export default CreateArticle;
