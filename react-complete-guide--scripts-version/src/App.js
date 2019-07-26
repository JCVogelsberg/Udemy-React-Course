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
    showPersons: false
  }



  nameChangedHandler = (event, id) => {     // 'id' CANNOT be changed, its a reserved word, apparently
    const personIndex = this.state.personsArray.findIndex(p => {
      console.log(id);
      return p.id === id;
    })

    const personVar = {                        // creates a copy, changes the copy
      ...this.state.personsArray[personIndex]  // spread operator distr. all properties of fetched object into new object 'personVar'
    };
      //  Alternate option
      //  const personVar = { Object.assign({}, this.state.personsArray[personIndex]); };

    personVar.name = event.target.value;  // update the name in the copy

    const newPersonsArray = [...this.state.personsArray];   // saves the state as 'newPersonsArray'
    newPersonsArray[personIndex] = personVar;

    this.setState({
      personsArray: newPersonsArray // set state to value of the copy you made & changed
    }) 
  }



  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;  // creates 'doesShow'
    this.setState({
      showPersons: !doesShow                  // changes showPersons valuye to opposite
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
              click={() => this.deletePersonHandler(index)} // in arrow func. so func. doesn't trigger right away
              name={personArg.name} 
              age={personArg.age} 
              key={personArg.id}
              changed={(event) => this.nameChangedHandler(event, personArg.id)}
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



