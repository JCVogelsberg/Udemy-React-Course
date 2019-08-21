import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  };


  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  };


  deleteCharHandler = (index) => {
    const textToDelete = this.state.userInput.split('');   // creates an array containing the info in the state
    textToDelete.splice(index,1);   // remove an item at position 'index', only 1
    const updatedText = textToDelete.join('');  // converts array back to string
    this.setState({
      userInput: updatedText  // update state to the value of our new string minus the item we deleted
    });
  };


  render() {

    const charList = this.state.userInput.split('').map(
      (blorp, index) => {  // 'split()' turns userInput into an array; map()' creates a mutable copy
        return <Char 
          slurpDurp={blorp} 
          key={index}    // uses second argument in map() as a unique key (not ideal)
          clicked={() => this.deleteCharHandler(index)}
        />;
      }
    );


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo-1" alt="logo" />
          <h1 className="App-title">Assignment 2, Take 2</h1>
          <img src={logo} className="App-logo-2" alt="logo" />
        </header>

        <h2>Enter Some Text:</h2>

        <input 
          type="text" 
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />

        <p>Text entered: {this.state.userInput}</p>
        
        <Validation 
          inputLength={this.state.userInput.length}
        />

        {charList}

      </div>
    );
  }
}

export default App;
