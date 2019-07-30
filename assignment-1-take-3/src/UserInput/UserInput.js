// UserInput.js
import React from 'react';

const userInput = (props) => {
  return(
    <div class="userInput">
      <h2>Input</h2>
      <input type="text" onChange={props.propPassedToInputDotJS} />
    </div>
  )
};

export default userInput;
