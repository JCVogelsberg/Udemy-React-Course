// SAMPLE REACT CODE
// -------------------


// HTML
// <div id="app"></div>


function Person(props) {.  // props is the function's argument
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p><strong>Your Age:</strong> {props.age}</p>  // props.whatever = attributes of the component
      <p><strong>State Your Deal:</strong> {props.deal}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Jeffy" age="32" deal="I'm hungry, and my feet hurt." />
    <Person name="Skippy" age="14" deal="I'm pissed they canceled Arrested Development" />
  </div>
);

ReactDOM.render(app, document.querySelector('#app'));