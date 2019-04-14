import React from 'react';
import twitter from './img/twitter.png';
import github from './img/github.png';
import linked from './img/linked.png';


const HomepageContent = () => {
  return (
        <div className="homepage">
        <div className="home">
            <div className="info">
              <p className="homeContent">Huthman King</p>
              <p className="homeContent">Full-Stack Web Developer</p>
          
              <div className="socials">
                <a href="https://www.linkedin.com/in/huthman-king-8b7376174/">
                  <img className="sociallink" src ={linked}/>
                </a>
                <a href="https://github.com/kinghuthman">
                  <img className="sociallink" src ={github}/>
                </a>
                <a href="https://twitter.com/kinghuthman">
                  <img className="sociallink" src={twitter} />
                </a>
              </div>
            </div>
          </div>
          </div>
  )
}

export default HomepageContent;

