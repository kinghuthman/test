

import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import styled from 'styled-components';
import AboutMe from './components/About/AboutMe';
import HomepageContent from './components/Homepage/HomepageContent';
import Projects from './components/Homepage/Projects';
import './App.css'

const Topbar=styled.div`
max-width:1080px;
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #fff;
border:1px solid black;
`
const TopBarContainer=styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #333;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
}
`
const ContainerLeft=styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
span {
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
}
`
const ContainerCenter=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  span {
    cursor: pointer;
    margin-right: 5%;
  }
  span:last-child {
    margin-right: 0;
  }
  span:hover {
    text-decoration: underline;
  }
  `
const ContainerRight=styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  span {
    cursor: pointer;
  }
  `
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Me</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={HomepageContent}/>
            <Route path="/about" component={AboutMe}/>
            <Route path="/projects" component={Projects}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;