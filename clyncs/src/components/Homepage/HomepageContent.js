import React from 'react';
import { withRouter, NavLink, Route } from 'react-router-dom';
import AboutMe from '../About/AboutMe';

const HomepageContent = props => {


  return (
        <div className="center">
          <div className="btn">
            <button>Projects</button> 
            <button>Contact</button>
           
          </div>
        </div>
  )
}



export default HomepageContent;

