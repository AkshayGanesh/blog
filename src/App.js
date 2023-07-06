import './App.css';
import React from 'react';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp/index';
import SingleArticle from './components/SingleArticle';
import CreateArtice from './components/CreateArticle';

require('dotenv').config()

const Main = withRouter(({ location }) => {
  return (
  <div>
    {
      location.pathname !== '/login' && location.pathname !== '/signup' &&
      <Navbar/>
    }
      
      <Route exact path="/" component={Welcome}/>   
      <Route path="/login" component={Login}/>
      <Route path="/article/:slug" component={SingleArticle}/>
      <Route path="/articles/create" component={CreateArtice}/>
      <Route path="/signup" component={SignUp}/>
      
      {
      location.pathname !== '/login' && location.pathname !== '/signup' &&
      <Footer />
    }
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
