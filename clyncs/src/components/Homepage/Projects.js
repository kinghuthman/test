import React from 'react';
import infinite from './infinitelinks4.jpg';
import dancing from './dancing.gif';

const Projects = () => {
  return (
      <div>
        <div className="center">
        <a href="https://adventureatlambda.netlify.com/">
        <img className="infinite" src={infinite} /></a>
        <h1>A multi user dungeon game created with react on the frontend and python on the backend. </h1>
        <p>username: kinghuthman password: huthmanking</p>
        </div>
        <div className="center">
        <a href="https://symposium-frontend.netlify.com/">
        <img className="dancing" src={dancing} /></a>
        <h1>A discussion board created with react on the frontend and node.js on the backend.</h1>
        </div>
        <div className="center">
        <a href="https://adventureatlambda.netlify.com/">
        <img className="infinite" src={infinite} /></a>
        <h1>UNDER CONSTRUCTION</h1>
        </div>
        <div className="center">
        <a href="https://adventureatlambda.netlify.com/">
        <img className="infinite" src={infinite} /></a>
        <h1>UNDER CONSTRUCTION</h1>
        </div>
        </div>
  )
}



export default Projects;