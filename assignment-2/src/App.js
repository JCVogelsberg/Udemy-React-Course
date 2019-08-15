import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation.js';
import Char from './Char/Char.js';

class App extends Component {
  state = {    
    userInput: ''
  };


  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })
  };


  render() {

    const charList = this.state.userInput.split('').map(ch => {    // 'map()' doesn't touch original array
      return <Char character={ch} />;
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ASSIGNMENT #2</h1>
          <h2 className="App-sub-title">"The Length of Entered Text"</h2>
        </header>

        <h2>Enter some text.</h2> 

        <input
          type="text"
          onChange={ this.inputChangedHandler }
          value={ this.state.userInput } 
        />
        
        <p>Text length: {this.state.userInput}</p>        
        
        <Validation inputLength={this.state.userInput.length} />
        
        {charList}   

      </div>
    );
  }
}

export default App;
