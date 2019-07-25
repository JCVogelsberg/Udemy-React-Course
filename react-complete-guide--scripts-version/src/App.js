import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    personsArray: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const personsArrayVariable = this.state.personsArray.slice();  // 'slice' w/out arg: creates copy
      //const personsArrayVariable = [...this.state.personsArray];  // alternative, 'spread operator'
    personsArrayVariable.splice(personIndex, 1);    // removes one element from the array
    this.setState({
      personsArray: personsArrayVariable    // Sets state to new updated state of array
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


    let perSOns = null;               // create the perSOns variable
    if (this.state.showPersons) {     // if showPersons === true...
      perSOns = (                     // ... assign the following as perSOns' value
        <div> 
          {this.state.personsArray.map((personArg, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} // arrow function so function doesn't trigger right away
              name={personArg.name} 
              age={personArg.age} 
            />
          })} 
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working!</p>
        <button
          onClick={this.togglePersonsHandler}
          style={buttonStyles}>
          Toggle Persons
        </button>        

        
        {perSOns} 


      </div>
        
    );
    // return React.createElement('div', {className: 'App'}, React.)
  }
}

export default App;

    // Access the values in state in render method using 'this'



