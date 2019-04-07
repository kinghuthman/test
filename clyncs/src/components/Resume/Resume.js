import React, { Component } from 'react';
import Pdf from './HuthmanKingWebDeveloper.pdf';
import resume from './Huthman King Web Developer.jpg';

class Resume extends Component {

  render() {

    return (
    <div>
      <div className = "App">
        <a href = {Pdf} target = "_blank">Download Resume</a>
      </div>
      <div className="center">
      <a href={Pdf} target = "_blank">
      <img className="resume" src={resume} /></a>
      </div>
      </div>
    );
  }
}

export default Resume;

