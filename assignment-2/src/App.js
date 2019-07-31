import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js';


class App extends Component {
  state = {
    textToBeMeasured: ''
  };


  render() {

    let enteredTextLength = this.state.textToBeMeasured.length;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ASSIGNMENT #2</h1>
          <h2 className="App-sub-title">"The Length of Entered Text"</h2>
        </header>


        <h2> Enter some text. </h2> 

        <input 
          type="text" 
          value={this.state.textToBeMeasured} 
          onChange={(eVenT) => { 
            this.setState({textToBeMeasured : eVenT.target.value});
          }}
        />
        <br/><br/>
        {enteredTextLength}

        <ValidationComponent
        //   length=
        />


      </div>
    );
  }
}

export default App;
