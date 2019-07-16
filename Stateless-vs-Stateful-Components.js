// Stateless vs Stateful Compinents
// -----------------------------------

- Every component receives props, and since React 16.8, you can also manage 
state in every component


Stateful components
- A component that manages state
- Whether using the useState hook, or class-based with the state property
- Also known as:
  * 'smart' components, because they have internal logic
  * 'containers', because they contain the state of your application
- You only want to have a couple of these (as few as possible)


-----------------------------------

Stateless components
- Stateless component have no internal state management
- Also known as:
  * 'dumb' components, because they have no internal logic
  * 'presentational' components, because they present something, output data

  EX:
    const person = (props) => {
      return (
        <div>
          <p>I am {props.name} and I am {props.age} years old!</p>
          <p>{props.children}</p>
        </div>
      )
    };

-----------------------------------

How & when to use each
- It is a good practice to use stateless components whenever you can
- You should have waaaayyyy more Stateless components than Stateful
Because:
  * So you have a clear flow of data
  * And it's clear where main logic is, and where data changes, and is 
  then distributed to the rest of the app, 


* * * "Stateful Apps are kind of like the microprocesser, and Stateless components 
are the things it controls." * * *




