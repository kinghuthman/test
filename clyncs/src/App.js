

import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import AboutMe from './components/About/AboutMe';
import HomepageContent from './components/Homepage/HomepageContent';
import Projects from './components/Homepage/Projects';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          {/* <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Me</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul> */}
          <div className="content">
            {/* <Route exact path="/" component={HomepageContent}/>
            <Route path="/about" component={AboutMe}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/resume" component={Resume}/> */}
            <Route path="/" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;