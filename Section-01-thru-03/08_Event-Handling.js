// Event Handling
// --------------------

- Our course example is getting a button to do something. 

- Add to the button a call to a function of the App class (a method).
EX:
  <button onClick={this.somethingSomethingHandler}>Click Here</button>

- No () after somethingSomethingHandler on button onClick, or it will execute immediately!

- Event handler method-naming converntion: somethingSomethingHandler    <--- ends with 'handler'

- Do Not use 'this' in a method on the App class, or 'this' will stop referring to the class

----------------------------------------

To Which Events Can You Listen?

- A list of supported events: https://reactjs.org/docs/events.html#supported-events