import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';


class App extends Component {
  state = {
    textToBeMeasured: ''
  };





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ASSIGNMENT #2</h1>
          <h2 className="App-sub-title">"The Length of Entered Text"</h2>
        </header>

        <h2> Enter some text. <br/>Keep it shorter than 4 characters.</h2> 
        <input 
          type="text" 
          value={this.state.textToBeMeasured} 
          onChange={(eVent) => { 
            this.setState({textToBeMeasured : eVent.target.value});
          }}
        />

        <ValidationComponent
          length={this.state.textToBeMeasured.length}
        />



      </div>
    );
  }
}

export default App;
