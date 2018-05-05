import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {toggleHome: false, toggleAbout: false, 
            toggleContact: false, toggleDrop: false}
    };

  render() {
    return (
        <nav>
            <div>
            <ul className="nav nav-pills nav-justified nav-tabs-honly" role="tablist" style={{background: '#D6EAF8', fontSize:'140%'}}>
                <li role="presentation" onClick={() => (this.setState({toggleHome: true, toggleAbout: false, toggleContact: false, toggleDrop: false}))} 
                className={ this.state.toggleHome ? "active" : ""} >
                <Link className="nav-link" to="#/">Home </Link>
                </li>
                <li role="presentation" onClick={() => (this.setState({toggleHome: false, toggleAbout: true, toggleContact: false, toggleDrop: false}))} 
                className={ this.state.toggleAbout ? "active" : ""} >
                <Link className="nav-link" to="#/about">About </Link>
                </li>
                {/* <li role="presentation" onClick={() => (this.setState({toggleHome: false, toggleAbout: false, toggleContact: true, toggleDrop: false}))} 
                className={ this.state.toggleContact ? "active" : ""}>
                <Link className="nav-link" to="/contact">Contact </Link>
                </li> */}
                <li role="presentation" onClick={() => (this.setState({toggleHome: false, toggleAbout: false, toggleContact: false, toggleDrop: true}))} 
                className={ this.state.toggleDrop ? "active" : ""}>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Links<span className="caret"></span></a>
                <ul className="dropdown-menu">
                    <li><a href="https://www.linkedin.com/in/vo-hieu-nghia-nick-vo-039b61101/">LinkedIn</a></li>
                    <li><a href="https://github.com/perseus0832">GitHub</a></li>                    
                </ul>
                </li>                
            </ul>
            </div>
        </nav>
        
    );
  }
}

export default Navigator;
