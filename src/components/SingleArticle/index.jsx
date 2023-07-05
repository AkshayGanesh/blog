/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./index.css";
import Axios from "axios";

class SingleArticle extends React.Component {
  state = {
    articleData: {}
  };

  componentDidMount() {
    this.getPost(this.props.match.params.slug);
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.getPost(this.props.match.params.slug);
    }
  }
  getPost = (slug) => {
    Axios.get(`http://localhost:8000/api/articles/${slug}`)
      .then((response) => {
        this.setState({articleData: response.data.data})
      })
      .catch(() => {});
  };

  render() {
    return (
      <div>
        {/* Header */}
        <header
          className="header header-inverse h-fullscreen pb-80"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-cup.jpg)`,
          }}
          data-overlay={8}
        >
          <div className="container text-center">
            <div className="row h-full">
              <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
                <p className="opacity-70">Article</p>
                <br />
                <h1 className="display-4 hidden-sm-down">
                  {" "}
                  {this.state.articleData ? this.state.articleData["article_header"] : null}
                </h1>
                <br />
                <br />
                <p>
                  <span className="opacity-70 mr-8">By</span>
                  <p className="text-white">Akshay G</p>
                </p>
                <p>
                  <img
                    className="rounded-circle w-40"
                    src={`${process.env.PUBLIC_URL}/assets/img/avatar/akshay-g.jpg`}
                    alt="..."
                  />
                </p>
              </div>
              <div className="col-12 align-self-end text-center">
                <p
                  className="scroll-down-1 scroll-down-inverse"
                  data-scrollto="section-content"
                >
                  <span />
                </p>
              </div>
            </div>
          </div>
        </header>
        {/* END Header */}
        {/* Main container */}
        <main className="main-content">
          {/*
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
| Blog content
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
!*/}
          <div className="section" id="section-content">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2" align="left">
                  {this.state.articleData ? <div dangerouslySetInnerHTML={{ __html: this.state.articleData["article_body"] }} /> : null}
                </div>
              </div>
            </div>
          </div>
          {/*
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
| Comments
|‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
!*/}
          {/* <div className="section bt-1 bg-grey">
          <div className="container">
            <div className="row text-center">
              <div className="text-center p-5">COMMENTS HERE.</div>
            </div>
          </div>
        </div> */}
        </main>
        {/* END Main container */}
      </div>
    );
  }
}

export default SingleArticle;
