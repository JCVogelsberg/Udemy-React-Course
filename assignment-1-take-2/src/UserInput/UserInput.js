// UserInput.js

import React from 'react';
//import './UserInput.css';

const userInput = (props) => {
  return(
    <div className="userInput">
      <h2>Input some stuff:</h2>
      <input type="text" onChange={props.changed} />
      
    </div>
  )
};

export default userInput;