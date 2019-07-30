// ValidationComponent.js

import React from 'react'

const validationComponent = (props) => {
  const conTenT = (props.length > 4) ? 'I said keep it shorter than 4 characters!' : '';  // ternary operator(?)
  return(
    <div>
      <p>{conTenT}</p>
    </div>
  );
};


export default validationComponent;