Creating Components
---------------------

- Can't use 'class' to add a CSS class, instead use 'className'

- Each component should get its own folder with a capital-cased name that is the same as the component

  EX:

  - Person (folder)
    - Person.js:
      
    --------------------------------

      import React from 'react';

      const person = () => {
        return <p>I'm a Person!</p>
      }

      export default person;

    --------------------------------

      * This function will be transformed to .createElement(), which is why React must be imported

========================================================

Functional components vs. Class-based components

- When creating components, you have the choice between two different ways:
  
- Functional components 
  * also referred to as "presentational", "dumb" or "stateless" components

  const cmp = () => { 
    return <div>some JSX</div> 
  }


- Class-based components 
  * also referred to as "containers", "smart" or "stateful" components

  class Cmp extends Component { 
    render () { 
      return <div>some JSX</div> 
    } 
  } 



