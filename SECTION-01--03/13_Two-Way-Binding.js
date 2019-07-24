// Two Way Binding
// --------------------

- Input into a stateless component, use 'onChange' method. It fires when the value changes

- Create a new handler in App.js, that uses setState
  EX:

    (in App.js)
    nameChangedHandler = (event) => {
      this.setState({       // setState changes the state
        personsArray: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: 'Stephanie!', age: 26 }
        ]
      }) 
    }

    <Person 
      name={this.state.personsArray[1].name} 
      age={this.state.personsArray[1].age}
      click={this.switchNameHandler.bind(this, 'Max!')}
      changed={this.nameChangedHandler}> // pass nameChangedHandler out as a prop
      My Hobbies: Racing
    </Person>  


    (in Person.js)
    <div>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" 
        onChange={props.changed} value={props.name} />
    </div>  


- onChange={props.changed} = Pass nameChangedHandler in as a prop  
- value={props.name} = Existing name is placeholder in text field    

