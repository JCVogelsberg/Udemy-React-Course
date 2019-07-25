// Handling Dynamic Content the 'JS' Way
// ----------------------------------------

- Whenever React detects changes to the DOM (props or state!), 
it executes the Render method (and everything in it).

- Code added before return method: 
  * Can be normal JS; not JSX if outside return method

- Move if statement out of JSX, and assign it to a variable, then call 
the variable in the return method


// ----------------------------------------

Outputting Lists

- Gets rid of the hardcoded 'Persons' components, with hardcoded values

- Handle lists using the default tools that JavaScript gives you:

- map() function: 
  * maps every element in an array and turns it into something else.
  EX:

    <div> 
      {this.state.personsArray.map(personArg => {
        return <Person 
          name={personArg.name} 
          age={personArg.age} 
        />
      })}  

-       














