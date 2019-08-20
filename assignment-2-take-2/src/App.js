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


  render() {

    const charList = this.state.userInput.split('').map((blorp, index) => {  // 'split()' turns userInput into an array; map()' creates a mutable copy
      return <Char slurpDurp={blorp} key={index} />;   // uses second argument in map() as a unique key (not ideal)
    });


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
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
