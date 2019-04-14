import React, { Component } from 'react';
import Pdf from './HuthmanKingWebDeveloper.pdf';
import resume from './Huthman King Web Developer.jpg';

class Resume extends Component {

  render() {

    return (
    <div className="resumecontains">
    <div className="resumecontain">
      <div>
        <a href = {Pdf} target = "_blank">Download Resume</a>
      </div>
        <div className="resumeimg">
          <a href={Pdf} target = "_blank">
          <img className="resume" src={resume} /></a>
        </div>
      </div>
      </div>
    );
  }
}

export default Resume;

