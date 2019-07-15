// Working with Props
// --------------------

- Props: attributes are passed to receiving components thru 
argument named "props" (although it can be named anything)

EX:
  const person = (props) => {
    return <p>I'm {props.name} and I'm {props.age} years old!</p>
  };

------------------------------------------------------------

- When using class-based components, use 'this.props'

EX:
  class Person extends Component {
    render() {
      return <p>My name is {this.props}</p>
    }
  }

------------------------------------------------------------

- {props.children}:
  * Outputs whatever is between a components opening & closing tages in App.js
  * Can be text, JSX components, even other React components

EX:
  const person = (props) => {
    return (
      <div>
        <p>I'm {props.name} and I'm {props.age} years old!</p>
        <p>{props.children}</p>
      </div>
    )
  };

