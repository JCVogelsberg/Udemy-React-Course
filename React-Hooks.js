// React Hooks
// ------------------

- setState() only available in class-based components

- Starting in React 16.8, React hooks can manage state in functional components

- In this course, we will stick to the old way: using class-based components to manage state 
  (this will allow you to understand the established syntax, which is the way things will be run at any existing team)

- React hooks: a collection of functions

- To use, add:
  import React, { useState } from 'react';

- Inside functional component, add useState() where state would normally go in a class-based component.
EX:

  const app = (props) => {
    useState({
      personsArray: [
        { name: 'Max', age: 28 },
        { ... },
        { ... }
      ],
      otherState: 'some other value'
    })
  }

- useState() returns an array with exactly (and ALWAYS) two elements: 
  * #1 element: current state, the object & (when we change it) the updated state
  * #2 element: a function that allows us to update this state, causing React to rerender it.

- Put the setState method in an array usinf square brackets to the left of the equals
EX:

  const app = (props) => {
    const [ personsState, setPersonsState ] = useState({
      personsArray: [
        { name: 'Max', age: 28 },
        { ... },
        { ... }
      ],
      otherState: 'some other value'
    })
  }


- 'personsState' - accesses data useState()
  Inside the return method:
    BEFORE:
      <Person name={this.state.personsArray[2].name} />

    AFTER:
      <Person name={personsState.personsArray[2].name} />      


- 'setPersonsState' - allows us to set a new state
  Add switchNameHandler back in, but put 'const' in front
  EX:
    const switchNameHandler = () => {    // 'const' added 
      setPersonsState({       // 'this.setState' changes to 'setPersonsState'
        personsArray: [
          { name: 'MAX!', age: 28 },
          { ... },
          { ... }
        ],
        otherState: personsState.otherState   // retain untouched old state (see * * * below)
      })
    }


    In button event handler:
      BEFORE:
        <button onClick={this.switchNameHandler}>Switch Name</button>
      AFTER:
        <button onClick={switchNameHandler}>Switch Name</button>


* * * IMPORTANT!
- setState() does not MERGE old and new state, it REPLACES old state with new state! 
- You have to manually make sure you include all old state data! (see above, line 68)
- Or (better), you can use useState() multiple times



