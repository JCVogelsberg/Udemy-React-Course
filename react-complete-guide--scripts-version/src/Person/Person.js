import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
  const radiumStyle = { 
    '@media (min-width:500px)': { // Put in quotes cause it's a string
      width: '450px'
    }
  };

  return (
    <div className="Person" style={radiumStyle}>
      <p>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <p>Change Name: <input type="text" onChange={props.changedName} value={props.name} /></p>
      <p>Change Age: <input type="text" onChange={props.changedAge} value={props.age} /></p>
      <button onClick={props.delete}>Designate for Dismemberment!</button>
    </div>
  )
};

export default Radium(person);