import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    userName: 'Herp Derp.'
  }

  usernameHandler = (event) => {
    this.setState({
      userName: event.target.value
    }) 
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This Is Assignment #1</h1>
        </header>      
        
        <UserInput userName={this.state.userName} changed={this.usernameHandler} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />  
        <UserOutput userName={this.state.userName} />

      </div>
    );
  }
}

export default App;
