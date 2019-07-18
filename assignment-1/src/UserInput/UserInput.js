// UserInput.js

import React from 'react';

const userInput = (props) => {
  return (
    <div className="userInput">
      <h2>Input:</h2>
      <input type="text" onChange={props.changed} value={props.inputName} />
    </div>
  )
};

export default userInput;