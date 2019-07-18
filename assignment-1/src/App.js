import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    userInputArray: [
      { userName: 'Username #1' },
      { userName: 'Username #2' },
      { userName: 'Username #POTATO' }
    ]
  }

  userInputChangedHandler = (event) => {
    this.setState({       // setState changes the state
      userInputArray: [
        { userName: event.target.value },
        { userName: 'Derp' },
        { userName: 'Hurr-Durr' }
      ]
    }) 
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This Is Assignment #1</h1>
        </header>      
        
        <UserOutput
          userName={this.state.userInputArray[0].userName} 
          changed={this.userInputChangedHandler}
        />
        
        <UserOutput
          userName={this.state.userInputArray[1].userName} 
        //  changed={this.userInputChangedHandler}
        />  
        
        <UserOutput
          userName={this.state.userInputArray[2].userName}
        //  changed={this.userInputChangedHandler}
        />

      </div>
    );
  }
}

export default App;
