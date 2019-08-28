// Styling React Components
// -----------------------------------

OverViEw:
- Styling React components 
- Dynamically adjusting styles & classNames
- Inline styles Limitations vs CSS and too global


// -----------------------------------

Inline Styling:
  Pros: very specific scope
  Cons: No pseudo selctors  

CSS Styling:
  Pros: less typing, centralized code 
  Cons: very broad scope

// -----------------------------------

  render() {
    const buttonStyles = {
      backgroundColor: 'green'
    };


    // Render Persons
    let perSOns = null;
    if (this.state.showPersons) {
      perSOns = (
        <div>
          {this.state.personsArray.map((personArg, index) => {
            return <Person 
              name={personArg.name} 
            />
          })} 
        </div>           
      );/
      
--->  buttonStyles.backgroundColor = 'red';  //if showPersons = true, the button is red
    }

// -----------------------------------






