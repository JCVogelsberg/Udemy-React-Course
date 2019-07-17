// Inline Styling opf React Components
// -------------------------------------

- Add styles to an object, and call the object on the element you want to style.

EX:

  render() {

    const buttonStyles = {    // Object containing styles
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    ...

    <button
      onClick={() => { return this.switchNameHandler('NeRF!!!')} }
      style={buttonStyles}>.  // Pass in style object above 
      Switch Name
    </button>      