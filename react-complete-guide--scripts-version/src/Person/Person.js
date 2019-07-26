import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className="person">
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <p>Change Name: <input type="text" onChange={props.changedName} value={props.name} /></p>
      <p>Change Age: <input type="text" onChange={props.changedAge} value={props.age} /></p>
    </div>
  )
};

export default person;