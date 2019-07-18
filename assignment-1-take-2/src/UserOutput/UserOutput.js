// UserOutput.js

import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div className="userOutput">
      <h2>Output:</h2>
      <p>The username is: <span className="emphasized-text">{props.username}</span></p>
    </div>
  )
};

export default userOutput;