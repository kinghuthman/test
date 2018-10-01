import React, {Component } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import HomepageHeader from './components/Homepage/HomepageHeader';
import Homepagecontent from './components/Homepage/HomepageContent';
import {Route, NavLink} from 'react-router-dom';


class App extends Component{
  
  
  

    render () {
    return (
      <div className="App">
      <NavLink className= "Home" to ="/home"> Home</NavLink>
      <TopBar />
      <HomepageHeader />
      <Homepagecontent />
      <Route path="/home"  component={App} loc="https://www.luvvvnomore.com"  />
      
      </div>
    );
  }
}


export default App;