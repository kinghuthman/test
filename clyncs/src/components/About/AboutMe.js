import React from 'react';

const AboutMe = () => {
  return (
      <div className="aboutcontain">
        <div className="aboutcontainer">
          <h1 className = "aboutheader">About Me</h1>
          <div className="about">
            <p className="aboutme">A 27 year old New Jersey native, currently residing in Lumberton, NJ. 
              Graduated from Iona College in New Rochelle, New York. From a young age 
              I've always loved creating and expressing myself in various ways. Whether it be sports, music, 
              or various fields of art, programming has allowed me to dive deeper and gain insight into a whole
              new way of approaching life.</p>
          </div>
          <div className="skills">
            <h1>Skills</h1>
              <ul className="aboutmelist">
                <li>JavaScript</li>
                <li>React/Redux</li>
                <li>Node.js/Express</li>
                <li>Python</li>
                <li>C</li>
                <li>PostgreSQL/MySQL</li>
                <li>Photoshop</li>
                <li>Reason(Audio Engineering/Production)</li>
              </ul>
            <h1>Hobbies</h1>
              <ul className="aboutmelist">
                <li>Programming</li>
                <li>Creating Music</li>
                <li>Sports</li>
                <li>Manchester United</li>
                <li>Philosphy/Psychology</li>
                <li>Adventures!</li>
              </ul>
          </div>
        </div>
        </div>
  )
}



export default AboutMe;