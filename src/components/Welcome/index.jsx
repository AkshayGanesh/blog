import React from "react";
import Banner from "./../Banner";
import Article from "../AllArticles";

import Axios from "axios";

class Welcome extends React.Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    this.getPost();
    window.scrollTo(0, 0);
  }
  getPost = (slug) => {
    Axios.get(`${process.env.REACT_APP_API_HOST_URL}/api/articles`)
      .then((response) => {
        this.setState({ articles: response.data.data });
      })
      .catch(() => {});
  };

  render() {
    let articleList = this.state.articles.map((article, i) => {
      return (
        <div key={i}>
          <Article
            article_header={article.article_header}
            article_id={article.article_id}
            article_date={article.article_date}
          />
        </div>
      );
    });
    return (
      <div>
        <Banner
          backgroundImage="url(assets/img/bg-gift.jpg)"
          title="Discovering the data journey!"
          subtitle=""
        />

        <main className="main-content bg-gray">
          <div className="row">
            <div
              className="col-12 col-lg-6 offset-lg-3"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <br />
              {articleList}
              <br />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p className="btn btn-white disabled">
                  <i className="ti-arrow-left fs-9 mr-4" /> Newer
                </p>
                <p className="btn btn-white">
                  Older
                  <i className="ti-arrow-right fs-9 ml-4" />
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Welcome;
