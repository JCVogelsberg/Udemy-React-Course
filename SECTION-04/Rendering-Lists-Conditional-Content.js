// Rendering Lists & Conditional Content
//----------------------------------------

- Today, we learn "Outputting content conditionally"

- Use arrow syntax for event handlers, or 'this' won't 
work right inside the handler

- You can inject JS expressions into JSX using single curly braces '{}'

- You can only use simple, ternary expressions*, not block statements in dynamic
syntax in return statement
//  * A ternary operator is an operator that takes three arguments.

  EX:
    return (
      <div className="App">

        {
          this.state.showPersons ?  // checks if showPersons = false
//        this.state.showPersons === true ?  // alternate syntax
            <div> 
            <Person 
              name={this.state.personsArray[0].name} 
              age={this.state.personsArray[0].age} 
            />
          </div>
          : null /// else statement; 'null' = render nothing
        }
      </div>

- If the condition left of the '?' is TRUE, we are actually calling 
'React.createElement()'. This is what's happening behind the scenes; we
 don't have call it explicitly
