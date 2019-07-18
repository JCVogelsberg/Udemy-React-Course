// UserOutput.js
 
import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="userOutput">
      <h2>Output</h2>
      <p>Username: {props.userName}</p>
      <p></p>
    </div>
  )
};

export default userOutput;