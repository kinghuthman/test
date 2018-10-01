import React from 'react';
import PropTypes from 'prop-types';
import infinite from '/Users/Huff/Desktop/Creatives Lync/clyncs/src/components/Homepage/infinitelinks4.jpg';

const Homepagecontent = props => {
  return (
        <div className="center">
        <img className="infinite" src={infinite} />
          <div className="btn">
            <button>Create</button> <button>Collaborate</button> <button>Consume</button>
          </div>
        </div>
  )
}

Homepagecontent.Proptypes={
  homepagecontent: PropTypes.object.isRequired
}

export default Homepagecontent;