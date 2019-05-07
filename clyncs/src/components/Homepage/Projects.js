import React from 'react';
import symposium from './img/symposiumDiscussionSchema.gif';
import lambdamud from './lambdamudtwo.gif';

const Projects = () => {
  return (
    <div className="projectcontainers">
      <div className="projectcontains">
        <h1>Projects</h1>
          <div className="projectcontainer">
            <div className="gifcontainer">
              <h2 className="projectTitle"> Lambda MUD</h2>
              <a href="https://adventureatlambda.netlify.com/" className="gifhere">
              <img className="gifone" src={lambdamud} /></a>
            </div>
              <h2>A multi user dungeon game created with react on the frontend and python on the backend. </h2>
              <p>  </p>
                <a href="https://github.com/kinghuthman/LambdaMUD-Client">Client Repository</a>
                <p>  </p>
                <a href="https://github.com/kinghuthman/LambdaMUD-Project">Server Repository</a>
                <p> Clicking on the gif leads you to the game. Test credentials if needed. 
                USERNAME: kinghuthman PASSWORD: huthmanking</p>
                <hr className="line"/>
          </div>
          
            <div className="projectcontainer">
              <div className="gifcontainer">
              <h2 className="projectTitle"> Symposium</h2>
                <a href="https://symposium-frontend.netlify.com/" className="gifhere">
                <img className="gif" src={symposium} /></a>
              </div>
                <h2 className="gifhere">A discussion board created with react/redux on the frontend, node.js/express on the backend, 
                  with a PostgreSQL database.</h2>
                  <p>  </p>
                  <a href="https://github.com/Lambda-School-Labs/labs10-discussion-board">Client/Server Repository </a>
                  <p>Clicking on the gif leads you to the actual discussion board.</p>
            </div>
        </div>
      </div>
  )
}



export default Projects;