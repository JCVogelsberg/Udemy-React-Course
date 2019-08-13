import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';


class App extends Component {
  state = {    
    inputText: []
  };


  onInputChange = e => {
    let bloRp = e.target.value.split("");
    this.setState({
      inputText: bloRp
    })
  };


  render() {

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
          onInput={ this.onInputChange }
          value={ this.state.inputText.join("") }
        />
        
        
        <p>Text length: {this.state.inputText.length}</p>
        
        <ValidationComponent />
        


      </div>
    );
  }
}

export default App;
