import React from "react";
import Banner from "./../Banner";
import Article from "../ArticleCard";

import Axios from "axios";

class Welcome extends React.Component {
  state = {
    articles: [],
    authenticated: false,
    name: "",
  };

  componentDidMount() {
    this.getNavbarInfo();
    this.getPost();
    window.scrollTo(0, 0);
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

  getPost = () => {
    Axios.get(`${process.env.REACT_APP_API_HOST_URL}/articles`)
      .then((response) => {
        this.setState({ articles: response.data.data });
      })
      .catch(() => {});
  };

  render() {
    let authentication_info = {
      authenticated: this.state.authenticated,
      name: this.state.name,
    };
    let articleList = this.state.articles.map((article, i) => {
      return (
        <div key={i}>
          <Article
            article_header={article.article_header}
            article_id={article.article_id}
            article_date={article.article_date}
            authentication_info={authentication_info}
          />
          <br />
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
