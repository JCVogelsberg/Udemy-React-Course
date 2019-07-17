import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    personsArray: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }


  switchNameHandler = (newName) => {
    this.setState({       // setState changes the state
      personsArray: [
        { name: newName, age: 28 },
        { name: 'MANU!', age: 29 },
        { name: 'STEPHANIE!', age: 27 }
      ]
    })
  }


  nameChangedHandler = (event) => {
    this.setState({       // setState changes the state
      personsArray: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie!', age: 26 }
      ]
    }) 
  }


  render() {

    const buttonStyles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button
          onClick={() => { return this.switchNameHandler('NeRF!!!')} }
          style={buttonStyles}>
          Switch Name
        </button>      
        <Person 
          name={this.state.personsArray[0].name} 
          age={this.state.personsArray[0].age} 
        />
        <Person 
          name={this.state.personsArray[1].name} 
          age={this.state.personsArray[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler} >
          My Hobbies: Racing
        </Person>  
        <Person   
          name={this.state.personsArray[2].name} 
          age={this.state.personsArray[2].age} 
        />
      </div>
        
    );
    // return React.createElement('div', {className: 'App'}, React.)
  }
}

export default App;

    // Access the values in state in render method using 'this'



