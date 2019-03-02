import React from 'react';
import PropTypes from 'prop-types';
import infinite from './infinitelinks4.jpg';

const HomepageContent = props => {
  return (
        <div className="center">
        <img className="infinite" src={infinite} />
          <div className="btn">
            <button>About Me</button> <button>Collaborate</button> <button>Consume</button>
          </div>
        </div>
  )
}



export default HomepageContent;