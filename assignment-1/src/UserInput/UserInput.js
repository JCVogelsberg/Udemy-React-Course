import React from 'react';
// import './UserInput.css';

const userInput = (props) => {
  <div className="userInput">
    <h2>Input:</h2>
    <input type="text" onChange={props.changed} value={props.inputName} />
  </div>
};

export default userInput;




// UserInput.js



