// UserOutput.js

import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return(
    <div class="userOutput">
      <h2>Output:</h2>
      <p>{props.propThatWillPassToOutputDotJS}</p>
    </div>
  )
};

export default userOutput;