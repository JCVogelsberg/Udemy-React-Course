// Char.js
import React from 'react';
import './Char.css';

const char = (props) => {
  return(
    <div className="charClass">
      {props.slurpDurp}
    </div>
  );
};

export default char;