/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import "./index.css";
import Axios from "axios";
import { useParams } from "react-router-dom";

const MyComponentWrapper = () => {
  const { slug } = useParams();
  console.log(slug)
  useEffect(() => {}, [slug]);
  return <SingleArticle slug={slug} />;
};

class SingleArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      articleData: {},
      slug: "",
    };
  }

  componentDidMount() {
    this.getPost(this.props.slug);
    window.scrollTo(0, 0);
  }

  get_slug = () => {
    const url = window.location.href;
    return url.substring(url.indexOf("/article/") + 9);
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.slug !== this.props.slug) {
  //     this.getPost(this.props.slug);
  //   }
  // }

  getPost = (slug) => {
    Axios.get(`${process.env.REACT_APP_API_HOST_URL}/articles/${slug}`)
      .then((response) => {
        this.setState({ articleData: response.data.data });
      })
      .catch(() => {});
  };

  render() {
    return (
      <div>
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
                  {this.state.articleData
                    ? this.state.articleData["article_header"]
                    : null}
                </h1>
                <br />
                <br />
                <div>
                  <span className="opacity-70 mr-8">By</span>
                  <p className="text-white">{this.state.articleData["name"]}</p>
                </div>
                <p>
                  <span className="opacity-70 mr-8">
                    {this.state.articleData["article_date"]}
                  </span>
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
        <main className="main-content">
          <div className="section" id="section-content">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2" align="left">
                  {this.state.articleData ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.articleData["article_body"],
                      }}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MyComponentWrapper;
