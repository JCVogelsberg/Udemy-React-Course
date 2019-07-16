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


  switchNameHandler = () => {
    this.setState({       // setState changes the state
      personsArray: [
        { name: 'MAX!', age: 28 },
        { name: 'MANU!', age: 29 },
        { name: 'STEPHANIE!', age: 27 }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.personsArray[0].name} 
          age={this.state.personsArray[0].age} 
        />
        <Person name={this.state.personsArray[1].name} age={this.state.personsArray[1].age}>
          My Hobbies: Racing
        </Person>  
        <Person 
          name={this.state.personsArray[2].name} 
          age={this.state.personsArray[2].age} 
        />
      </div>
                      // Access the values in state in render method using 'this'
    );
    // return React.createElement('div', {className: 'App'}, React.)
  }
}

export default App;

