import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    personsArray: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: true
  };


  nameChangedHandler = (event, id) => {
    const personNameIndex = this.state.personsArray.findIndex(p => {
      return p.id === id;
    });

    const mutableCopyOfPersonsArray = {   // creates a copy, changes the copy
      ...this.state.personsArray[personNameIndex]  
    };

    mutableCopyOfPersonsArray.name = event.target.value;  // update the name in the copy

    const newPersonsArray = [...this.state.personsArray];  // saves the state as 'newPersonsArray'
    newPersonsArray[personNameIndex] = mutableCopyOfPersonsArray;

    this.setState({
      personsArray: newPersonsArray // set state to value of 'newPersonsArray' copy
    });
  };


      ageChangedHandler = (event, id) => {
        const personAgeIndex = this.state.personsArray.findIndex(x => { 
          return x.id === id;   // return pos in array with index matching 'id' arg
        });

        const mutableCopyOfPerson = { ...this.state.personsArray[personAgeIndex] }; // assign value of person who's being changed to a var 

        mutableCopyOfPerson.age = event.target.value; // changed value of age property to what was entered

        const newAgePersonsArray = [...this.state.personsArray];  // assign current state to a 'newAgePersonsArray' var
        newAgePersonsArray[personAgeIndex] = mutableCopyOfPerson; // update just the person's value that was changed

        this.setState({
          personsArray: newAgePersonsArray // update state with new info
        });
      };


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;  // creates 'doesShow'
    this.setState({
      showPersons: !doesShow                  // changes showPersons valuye to opposite
    })
  };


  deletePersonHandler = (personIndex) => {
    const personsArrayVariable = this.state.personsArray.slice();  // 'slice' w/out arg: creates copy
      //const personsArrayVariable = [...this.state.personsArray];  // alternative, 'spread operator'
    personsArrayVariable.splice(personIndex, 1);    // removes one element from the array
    this.setState({
      personsArray: personsArrayVariable    // Sets state to new updated state of array
    })
  };


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
              click={ () => this.deletePersonHandler(index) } // in arrow func. so func. doesn't trigger right away
              name={personArg.name} 
              age={personArg.age} 
              key={personArg.id}
              changedName={ (event) => this.nameChangedHandler(event, personArg.id) }
              changedAge={ (event) => this.ageChangedHandler(event, personArg.id) }
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



