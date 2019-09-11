import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
  // const rnd = Math.random();
  // if (rnd > 0.7) {
  //   throw new Error('This is an Outrage!');
  // }

  return (
    <div className={classes.Person}>
      <p>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <p>Change Name: <input type="text" onChange={props.changedName} value={props.name} /></p>
      <p>Change Age: <input type="text" onChange={props.changedAge} value={props.age} /></p>
      <button onClick={props.delete}>Designate for Dismemberment!</button>
    </div>
  )
};

export default person;