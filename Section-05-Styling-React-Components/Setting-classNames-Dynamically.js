// Setting classNames Dynamically
// -----------------------------------

Adding Classes to an Element with JS

- Assign an array of classNames to a variable:

  let classes = ['red','bold'].join(' ');


- Assign the variable to an element

  return (
    <div className="App">
      <p className={classes}>This is really working!</p>
    </div>
      
  );

// -----------------------------------

Adding Classes to an Element Dynamically

- Create an empty Array
  const classes = []


- If two or less in the personsArray, push 'red' class to classes array
  if (this.state.personsArray.length <= 2) {
    classes.push('red'); 
  };

- If one or less in the personsArray, push 'bold' class to classes array
  if (this.state.personsArray.length <= 1) {
    classes.push('bold'); // push 'bold' class to classes array
  }

- Create a string of classNames from the array and assign it to p-tag
  
  return (
    <div className="App">
      <p className={classes.join(' ')}>This is really working!</p>
    </div>
  );  





  