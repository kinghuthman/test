import React, {Component } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import HomepageHeader from './components/Homepage/HomepageHeader';
import Homepagecontent from './components/Homepage/HomepageContent';
import {Route, NavLink} from 'react-router-dom';
import UnderConstruct from './components/Homepage/UnderConstruction';


class App extends Component{

    render () {
    return (
      <div className="App">
      {/* <HomepageHeader />
      <Homepagecontent /> */}
      <Route path="/"  component={UnderConstruct} />
      
      </div>
    );
  }
}


export default App;