import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';


class App extends Component {
  state = {
    textToBeMeasured: '',
    textToBeMeasuredArray: []
  };


  passToArray = (event) => {
    const textToBeMeasuredArrayMutableCopy = [...this.state.textToBeMeasuredArray];
    
    return('derf.');
  // We now have a mutable copy of the array in our state (textToBeMeasuredArrayMutableCopy),
  // figure out how to turn a string into letters and push those letters to this array

  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ASSIGNMENT #2</h1>
          <h2 className="App-sub-title">"The Length of Entered Text"</h2>
        </header>


        <h2>Enter some text.</h2> 

        <textarea 
          changed={ this.passToArray }
        />
        
        <br/><br/>
        // Output count here

        <ValidationComponent

        />


      </div>
    );
  }
}

export default App;
