import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    personsArray: [
      { name: 'Max', age: 28 },
      { name: 'Derf', age: 17 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = () => {
  //  console.log('Was clicked!');
  //  this.state.personsArray[0].name = 'Maximilian';
    this.setState({
      personsArray: [
        { name: 'Maximilian', age: 28 },
        { name: 'Derf', age: 17 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.personsArray[0].name} age={this.state.personsArray[0].age} />
        <Person name={this.state.personsArray[1].name} age={this.state.personsArray[1].age} />
        <Person name={this.state.personsArray[2].name} age={this.state.personsArray[2].age} />
      </div>
    );
  }
}

export default App;
