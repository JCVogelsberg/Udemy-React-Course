// Validation.js
import React from 'react';


const validation = (props) => {
  let validationMessage = 'Text long enough';

  if (props.inputLength <= 5) {
    validationMessage = 'Text too short';
  }
  return(
    <div className="validationComponent">
      <p>Text Length: {props.inputLength}</p>
      <p>{validationMessage}</p>  
    </div>
  );
};


export default validation;