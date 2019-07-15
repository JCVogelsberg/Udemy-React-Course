// Manipulating the State
// -------------------------

- setState()
  * takes an object as an argument
  * will merge what ever you enter into it with the existing state


EX:
  switchNameHandler = () => {
    this.setState({
      personsArray: [
        { name: 'Maximilian', age: 28 },
        { name: 'Derf', age: 17 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

- The DOM gets updated because React recognized that the state of the app changed.

- Changing state or props are the only thing that change the DOM in React


* * * When you call a method that has setState() in it, it changes the state of the DOM * * *