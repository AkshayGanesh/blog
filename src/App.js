import './App.css';
import React from 'react';
import { BrowserRouter, Route, useLocation, useNavigate, useParams, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp/index';
import SingleArticle from './components/SingleArticle';
import CreateArtice from './components/CreateArticle';
import MyArticles from './components/MyArticles';


// require('dotenv').config()


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

const Main = withRouter(() => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Welcome/>}/>   
        <Route path="/login" element={<Login/>}/>
        <Route path="/article/:slug" element={<SingleArticle/>}/>
        <Route path="/articles/create" element={<CreateArtice/>}/>
        <Route path="/articles/myarticles" element={<MyArticles/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer />
    </div>
  );
  });

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
