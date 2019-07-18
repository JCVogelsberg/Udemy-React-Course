// What the Hell is State?!
// ----------------------------

- State is managed from inside a component, rather than outside like props.

- The state property is only available in components that extend components (ie: class-based components).
  * React hooks (new hotness) will allow you to manage state in functional components

- You should use functional components as often as possible, because you should be careful with state!


REVIEW
========================================================
|
|  Functional components vs. Class-based components
|      
|    Functional components 
|      * "presentational", "dumb" or "stateless"
|
|      const cmp = () => { 
|        return <div>some JSX</div> 
|      }
|
|
|    - Class-based components 
|      * "containers", "smart" or "stateful"
|      * will always(?) have a render() method 
|
|      class Cmp extends Component { 
|        render () { 
|          return <div>some JSX</div> 
|        } 
|      } 
|
========================================================



- Assign a value to state in the form of a JS component

EX:
  state = {
    stateExampleArray: [        // <----- an array        
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

- Access the values in state in the render method using 'this'

EX:

  render() {
    return (
      // Hard coded
      <Person name='Max' age="28"/>
      <Person name='Manu' age="29"/>
      <Person name='Stephanie' age="26"/>

      // Using state
      <Person name={this.state.stateExampleArray[0].name} age={this.state.stateExampleArray[0].age} />
      <Person name={this.state.stateExampleArray[1].name} age={this.state.stateExampleArray[1].age} />
      <Person name={this.state.stateExampleArray[2].name} age={this.state.stateExampleArray[2].age} />
    )
  }


What makes State a special property?
- The way it is used above isnt special
- State can be changed, and if changed, React will re-render the DOM, and that is actually pretty damned special.






