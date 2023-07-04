import React from "react";
import Banner from "./../Banner";
import Article from "./../Article";

const Welcome = () => {
  return (
    <div>
      <Banner
        backgroundImage="url(assets/img/bg-gift.jpg)"
        title="Data-savvy"
        subtitle="Discovering the data journey! Built by Akshay G"
      />

      <main className="main-content bg-gray">
        <div className="row">
          <div className="col-12 col-lg-6 offset-lg-3">
            <Article />
            {/* <hr />
            <Article />
            <hr />
            <Article /> */}
            <nav className="flexbox mt-50 mb-50">
              <p className="btn btn-white disabled">
                <i className="ti-arrow-left fs-9 mr-4" /> Newer
              </p>
              <p className="btn btn-white">
                Older
                <i className="ti-arrow-right fs-9 ml-4" />
              </p>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Welcome;
