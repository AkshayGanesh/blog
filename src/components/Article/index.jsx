import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Article = () => {
  return (
    <article className="mt-90">
      <header className="text-center mb-40">
        <h3>
          {/* <a href="blog-single.html">New features will add to dashboard soon</a> */}
          Python is slow? Don’t want to learn C as well? Welcome to Cython
        </h3>
        <div className="link-color-default fs-12">
          <a href="#">News</a>,<time>March 29, 2021</time>
        </div>
      </header>
      {/* <a href="blog-single.html"> */}

      {/* </a> */}
      <div className="card-block">
        <img className="rounded" src="assets/img/blog-1.jpg" alt="..." />
        <p className="text-justify">
          Cython enables you to speed up your python logic exponentially. If you
          have not entered the world of Cython, feel free to go through this
          article
        </p>
        <p className="text-center mt-40">
          <Link
            className="btn btn-primary btn-round"
            to="/article/some-title-slug"
          >
            Read more
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Article;
