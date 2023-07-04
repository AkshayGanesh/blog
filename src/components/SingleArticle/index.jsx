/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./index.css";
// import createDOMPurify from 'dompurify'
// import { JSDOM } from 'jsdom'

// const window1 = (new JSDOM('')).window
// const DOMPurify = createDOMPurify(window1)

class SingleArticle extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  rawHTML = `
  <p>
    <span style="font-size: 18px;">Quill Rich Text Editor</span>
</p>
<p>
    <br>
</p>
<p>Quill is a free,
    <a href="https://github.com/quilljs/quill/" target="_blank">open source</a>WYSIWYG editor built for the modern web. With its
    <a href="http://quilljs.com/docs/modules/" target="_blank">extensible architecture</a>and a
    <a href="http://quilljs.com/docs/api/" target="_blank">expressive API</a>you can completely customize it to fulfill your needs. Some built in features include:</p>
<p>
    <br>
</p>
<ul>
    <li>Fast and lightweight</li>
    <li>Semantic markup</li>
    <li>Standardized HTML between browsers</li>
    <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
</ul>
<p>
    <br>
</p>
<p>
    <span style="font-size: 18px;">Downloads</span>
</p>
<p>
    <br>
</p>
<ul>
    <li>
        <a href="https://quilljs.com" target="_blank">Quill.js</a>, the free, open source WYSIWYG editor</li>
    <li>
        <a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js
        <img src="data:image/png;base64,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0KCB0/Jff/21du3adcWvP/k5/jLBzeHu7i6fqlWUeb78SeTVAvxlvZDlFAru7u6q4u0l64WsK647KChQVmuW01XL16KyY/39fHUhK7vCX96BgQG6cCHrhvwVBDe30ukHF66w/7Vq1dDZs+cq/VwWi0W1a9XQmYyzv2g7q1atIpvNdt1fIhxUPVDnMs+XG4gV7XvZRP6LF3PKXa+7u7v8/X119mxmpU9j/pKxuDX91v8yAaF2A6Snp2vBggVaunSpbDabsrJK37hatWqlMWPGqGvXrhVO8sdPCDUAwI30Ww+1W/571G6EsLAwpaamat26dfL29paLi4vGjh2r9957T927dyfSAADAdaEgbhA3Nzd16NBBe/bs0d69e9W8efNKf4kuAADA5Qi1G6xKlSr2v6EJAADwS3DqEwAAwFCEGgAAgKEINQAAAEMRagAAAIYi1AAAAAxFqAEAABiKUAMAADAUoQYAAGAoQg0AAMBQhBoAAIChLDExMbabvREAAABwZsmyXiDUAAAADMSpTwAAAEMRagAAAIYi1AAAAAxFqAEAABiKUAMAADAUoQYAAGAoQg0AAMBQhBoAAIChCDUAAABDEWoAAACGItQAAAAMRagBAAAYilADAAAwFKEGAABgKEINAADAUG579++72dsAAACAclhOZ2TYbvZGAAAAwBmnPgEAAAxFqAEAABiKUAMAADAUoQYAAGAoQg0AAMBQhBoAAIChCDUAAABDEWoAAACGItQAAAAMRagBAAAYilADAAAwFKEGAABgKEINAADAUIQaAACAoQg1AAAAQxFqAAAAhiLUAAAADEWoAQAAGIpQAwAAMBShBgAAYChCDQAAwFCEGgAAgKEINQAAAEMRagAAAIYi1AAAAAxFqAEAABiKUAMAADAUoQYAAGAoQg0AAMBQhBoAAIChCDUAAABDEWoAAACGItQAAAAMRagBAAAYilADAAAwFKEGAABgKEINAADAUIQaAACAoQg1AAAAQ7kdSU+/2dsAAACAclhKiopsN3sjAAAA4IxTnwAAAIYi1AAAAAxFqAEAABiKUAMAADAUoQYAAGAoQg0AAMBQhBoAAIChCDUAAABDEWoAAACGItQAAAAMRagBAAAYilADAAAwFKEGAABgKEINAADAUIQaAACAoQg1AAAAQxFqAAAAhiLUAAAADEWoAQAAGIpQAwAAMBShBgAAYChCDQAAwFCEGgAAgKEINQAAAEMRagAAAIYi1AAAAAxFqAEAABiKUAMAADAUoQYAAGAoQg0AAMBQhBoAAIChCDUAAABDEWoAAACGItQAAAAMRagBAAAYilADAAAwFKEGAABgKEINAADAUIQaAACAoQg1AAAAQxFqAAAAhiLUAAAADEWoAQAAGIpQAwAAMBShBgAAYChCDQAAwFCEGgAAgKEINQAAAEMRagAAAIYi1AAAAAxFqAEAABiKUAMAADAUoQYAAGAoQg0AAMBQhBoAAIChCDUAAABDEWoAAACG+n8qV2EQdvHu9wAAAABJRU5ErkJggg==">
    </li>
</ul>
<p>
    <br>
</p>
  `
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
                <p className="opacity-70">News</p>
                <br />
                <h1 className="display-4 hidden-sm-down">
                  {" "}
                  Python is slow? Don't want to learn C as well? Welcome to
                  Cython !
                </h1>
                <h1 className="hidden-md-up">
                  {" "}
                  Python is slow? Don't want to learn C as well? Welcome to
                  Cython !
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
                { <div dangerouslySetInnerHTML={{ __html: this.rawHTML }} /> }

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
