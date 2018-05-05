import React, { Component } from 'react';
import logo from './logo.svg';
import icon from './resource/method-draw-image.svg';
import './App.css';
import Navigator from './Navigator';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import MenuPop from './MenuPop'
import Footer from './Footer'

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


// const Home = () => <h1>Home</h1>;
// const About = () => <h1>About</h1>;

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={icon} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Porfolio</h1>
        </header>
        <BrowserRouter>
        <div className="App">
        <Navigator />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/React-profile/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
        </BrowserRouter>
        <footer className="App-footer">
          <Footer/>
          
        </footer>
      </div>
    );
  }
}

export default App;
