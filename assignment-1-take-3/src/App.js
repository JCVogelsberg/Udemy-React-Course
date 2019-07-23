import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput.js'
import UserInput from './UserInput/UserInput.js'

class App extends Component {
  state = {
    propNamePassedToRenderElement: '[Default Username]'
  };


  functionThatChangesStateWhenSomethingNewIsAdded = (event) => {
    this.setState({
      propNamePassedToRenderElement: event.target.value  
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Project. DEAL WITH IT.</h1>
        </header>
      
        <div class="flex-container-left">
          <UserInput 
            propThatWillPassToOutputDotJS={this.state.propNamePassedToRenderElement}
            propPassedToInputDotJS={this.functionThatChangesStateWhenSomethingNewIsAdded}
          />
        </div>
        <div class="flex-container-right">
          <UserOutput propThatWillPassToOutputDotJS={this.state.propNamePassedToRenderElement} />
          <UserOutput propThatWillPassToOutputDotJS={this.state.propNamePassedToRenderElement} />
          <UserOutput propThatWillPassToOutputDotJS={this.state.propNamePassedToRenderElement} />
        </div>
      </div>
    );
  }
}

export default App;

