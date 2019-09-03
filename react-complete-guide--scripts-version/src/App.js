import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
    personsArray: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
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

  // My Own Handler
  ageChangedHandler = (event, id) => {
    const personAgeIndex = this.state.personsArray.findIndex(x => { 
      return x.id === id;   // return array position with index matching 'id' argument
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

    let btnClass = '';                // creates btnClass for styles (?)
    let perSOns = null;               // create the perSOns variable

    if (this.state.showPersons) {     // if showPersons === true...
      perSOns = (                     // ... assign the following as perSOns' value
        <div> 
          {this.state.personsArray.map((personArg, index) => {
            return <Person 
              name={personArg.name} 
              age={personArg.age} 
              key={personArg.id}
              delete={this.deletePersonHandler}
              changedName={ (event) => this.nameChangedHandler(event, personArg.id) }
              changedAge={ (event) => this.ageChangedHandler(event, personArg.id) }
            />
          })} 
        </div>           
      );
      btnClass = classes.Red;   /// this just handles the btn's red states when opened
    }


    const assignedClasses = []
    if (this.state.personsArray.length <= 2) {
      assignedClasses.push( classes.red );    /// push 'red' class to assignedClasses array
    };
    if (this.state.personsArray.length <= 1) {
      assignedClasses.push( classes.bold ); // push 'bold' class to assignedClasses array
    }


    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App!</h1>   
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler} >
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



