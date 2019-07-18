// Passing Method References between Components
// -----------------------------------------------

- You can pass methods as props!

- You can call a method that changes the state in anoth component that 
doesn't/shouldn't have direct access to the state

- Want an event handler in a component, but the event handler is in app.js? You can pass
 a reference to an event handler in App.js as a property of the component!

 EX:
 (in the render method)
   <Person 
    name={this.state.personsArray[0].name} 
    age={this.state.personsArray[0].age} 
    click={this.switchNameHandler}
  /> 

  (in Person.js)
    const person = (props) => {
      return (
        <div>
          <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
          <p>{props.children}</p>
        </div>
      )
    };


// -----------------------------------------------

- You want to also pass a value to the function?
  EX:
    (in App.js)
    switchNameHandler = (newName) => {   // 
      this.setState({
        personsArray: [
          { name: newName, age: 28 },    // 
          { name: 'MANU!', age: 29 },
          { name: 'STEPHANIE!', age: 27 }
        ]
      })
    }  
    <button onClick={this.switchNameHandler.bind(this, 'Maximillian!')}>Switch Name</button>
    <Person name={this.state.personsArray[1].name} age={this.state.personsArray[1].age}>
      // Notice they can be different values!

    

    ALTeRNaTiVe SyNTaX!!
      (in App.js)
      <button onClick={() => { return this.switchNameHandler()} }>Switch Name</button>      

        // This syntax not as good, can rerender too often & slow the app down.


