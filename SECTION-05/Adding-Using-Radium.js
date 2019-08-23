// Adding & Using Radium
// -----------------------------------

- Limitations of inline styles: can't use pseudo-selectors (example: button hover state)'

- Styling the button hover state in CSS is too wide of a scope

Solution: Radium, a third party package that allows more styling inline

- Install:
  * npm install --save radium

- Use:
  * Import it into file: 
    import Radium from 'radium';  // at the top of the page
    export default Radium(App);  // at the bottom (this is called a 'higher-order component')
  
  * In inline styles:
    ':hover': {      // pseudo-element in quotes, as it isn't a JS element and starts with a colon
      backgroundColor: 'lightgreen',
      color: 'black'
    }


    buttonStyles[':hover'] = {
      backgroundColor: 'pink',
      color: 'black'
    }



- Radium also allows you to use media queries!

  EX:
  const person = (props) => {
    const radiumStyle = { 
      '@media (min-width:500px)': { // Put in quotes cause it's a string
        width: '450px'
      }
    };

    return (
      <div className="Person" style={radiumStyle}>...</div>                  /
    ) 
  }



- To use media queries, import as such:

  import Radium, { StyleRoot } from 'radium';
  
- Place 'StyleRoot' around the App in the return statement

  EX:
  return (
    <StyleRoot>
    <div className="App">
      ...
    </div>
    </StyleRoot>  
  );





