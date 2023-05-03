/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import './index.css'

const SingleArticle = () => {
  return (
    <div>
      {/* Header */}
      <header
        className="header header-inverse h-fullscreen pb-80"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL
          }/assets/img/bg-cup.jpg)`,
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
                Python is slow? Don’t want to learn C as well? Welcome to Cython
                !
              </h1>
              <h1 className="hidden-md-up">
                {" "}
                Python is slow? Don’t want to learn C as well? Welcome to Cython
                !
              </h1>
              <br />
              <br />
              <p>
                <span className="opacity-70 mr-8">By</span>
                <a className="text-white" href="#">
                  Akshay G
                </a>
              </p>
              <p>
                <img
                  className="rounded-circle w-40"
                  src={`${
                    process.env.PUBLIC_URL
                  }/assets/img/avatar/akshay-g.jpg`}
                  alt="..."
                />
              </p>
            </div>
            <div className="col-12 align-self-end text-center">
              <a
                className="scroll-down-1 scroll-down-inverse"
                href="#"
                data-scrollto="section-content"
              >
                <span />
              </a>
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
              <div className="col-12 col-lg-8 offset-lg-2">
                <p className="lead">
                  Let’s see how we can enjoy the best of both worlds (almost)!{" "}
                </p>
                <p>
                  <strong>What is Cython?</strong>
                </p>
                <p>
                  The Cython programming language enriches Python by C-like
                  static typing, the ability to directly call C functions, and
                  several other features. This allows to reach C-level
                  performance while still using a Python-like syntax.
                </p>
                {/* <hr className="w-100" /> */}
                <p>
                  <strong>How does it work?</strong>
                </p>
                <p>
                  Cython code is compiled using the cython source-to-source
                  compiler to create C or C++ code, which in turn can be
                  compiled using a C compiler. This allows to create extensions
                  that can be imported from Python or executables.
                </p>
                <p>
                  The main performance gain Cython can reach in contrast to pure
                  Python stems from bypassing the CPython API. For example when
                  adding two integers, Python performs a type check for each
                  variable, finds an add function that satisfies the found
                  types, and calls that function. In the Cython-generated C
                  code, the types are already know and only one function call to
                  is made. Hence, Cython especially shines for mathematic
                  problems in which the types are clear.
                </p>
                <p>
                  Now since that is out of the way, lets see how we can get
                  hands on..
                </p>
                <p>
                  A Cython pyx file needs to be translated to C code
                  (cythonized) and compiled before it can be used from Python. A
                  common approach is to create an extension module which is then
                  imported in a Python program.
                </p>
                <p>For this example we create three files:</p>
                <ul>
                  <li>my_cython.pyx contains the Cython code.</li>
                  <li>
                    tester.py is a Python script that uses the my_cython
                    extension.
                  </li>
                  <li>setup.py is used to compile the Cython code.</li>
                </ul>
                <p>
                  <strong>my_cython.pyx</strong>
                </p>
                <p>
                  <iframe
                    className="mycythonPrgm"
                    scrolling="auto"
                    // border="0"
                    transform="scale(1)"
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=from%2520libc.math%2520cimport%2520pow%250A%250Acdef%2520double%2520square_and_add%2520%28double%2520x%29%253A%250A%2520%2520%2520%2520%2522%2522%2522%250A%2520%2520%2520%2520Compute%2520x%255E2%2520%252B%2520x%2520as%2520double.%250A%2520%2520%2520%2520This%2520is%2520a%2520cdef%2520function%2520that%2520can%2520be%2520called%2520from%2520within%250A%2520%2520%2520%2520a%2520Cython%2520program%252C%2520but%2520not%2520from%2520Python.%250A%2520%2520%2520%2520%2522%2522%2522%250A%2520%2520%2520%2520return%2520x%2520%252B%2520pow%28x%252C%25202.0%29%250A%250Acpdef%2520print_result%2520%28double%2520x%29%253A%250A%2520%2520%2520%2520%2522%2522%2522%250A%2520%2520%2520%2520This%2520is%2520a%2520cpdef%2520function%2520that%2520can%2520be%2520called%2520from%2520Python.%250A%2520%2520%2520%2520%2522%2522%2522%250A%2520%2520%2520%2520print%28f%2522%28%257Bx%257D%2520%255E%25202%29%2520%252B%2520%257Bx%257D%2520%253D%2520%257Bsquare_and_add%28x%29%257D%2522%29"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </p>
                <p>
                  <strong>tester.py</strong>
                </p>
                <p>
                  <iframe
                    className="testerPrgm"
                    scrolling="auto"
                    // border="0"
                    transform="scale(1)"
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=python&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2523%2520Import%2520the%2520extension%2520module%2520my_cython.%250Aimport%2520my_cython%250A%250A%2523%2520Call%2520the%2520print_result%2520method%2520%250Amy_cython.print_result%2823.0%29"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </p>
                <p>
                  <strong>setup.py</strong>
                </p>
                <p>
                  <iframe
                    className="setupPrgm"
                    scrolling="auto"
                    // border="0"
                    transform="scale(1)"
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=python&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=from%2520distutils.core%2520import%2520Extension%252C%2520setup%250Afrom%2520Cython.Build%2520import%2520cythonize%250A%250A%2523%2520define%2520an%2520extension%2520that%2520will%2520be%2520cythonized%2520and%2520compiled%250Aext%2520%253D%2520Extension%28name%253D%2522my_cython%2522%252C%2520sources%253D%255B%2522my_cython.pyx%2522%255D%29%250Asetup%28ext_modules%253Dcythonize%28ext%29%29"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </p>
                <p>Now we compile.. (what? compiling in python?)</p>
                <p>
                  This can be done by, using cython my_cython.pyx to translate
                  the code to C and then compile it using gcc . An easier way is
                  to let distutils handle this:
                </p>
                <p>
                  <iframe
                    className="compilePrgm"
                    scrolling="auto"
                    // border="0"
                    transform="scale(1)"
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=application%2Fx-sh&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2524%2520ls%250Amy_cython.pyx%2520%2520setup.py%2520%2520tester.py%250A%2524%2520python%2520setup.py%2520build_ext%2520--inplace%250A%2524%2520ls%250Abuild%2520%2520my_cython.c%2520%2520my_cython.cpython-34m.so%2520%2520my_cython.pyx%2520%2520setup.py%2520%2520tester.py"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </p>
                <p>
                  The shared object (.so) file can be imported and used from
                  Python, so now we can run the <strong>test.py</strong> :
                </p>
                <p>
                  <iframe
                    className="testPrgm"
                    scrolling="auto"
                    // border="0"
                    transform="scale(1)"
                    src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=application%2Fx-sh&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2524%2520python%2520test.py%250A%2823.0%2520%255E%25202%29%2520%252B%252023.0%2520%253D%2520552.0%250A"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </p>
                <p>
                  That’s it, that is your first step into Cython. Feel free to
                  share this article :)
                </p>
                <blockquote className="blockquote">
                  <div className="quote-sign" />
                  <p>
                    Programming is not just about writing code, it's about
                    crafting solutions that make a positive impact on people's
                    lives.
                  </p>
                  <footer>
                    <cite title="Source Title">ChatGPT</cite>
                  </footer>
                </blockquote>
                <div className="gap-multiline-items-1 mt-30">
                  <a className="badge badge-pill badge-default" href="#">
                    Cython
                  </a>
                  <a className="badge badge-pill badge-default" href="#">
                    Python
                  </a>
                  <a className="badge badge-pill badge-default" href="#">
                    C
                  </a>
                  <a className="badge badge-pill badge-default" href="#">
                    Optimisation
                  </a>
                </div>
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
};

export default SingleArticle;
