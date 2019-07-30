// Lists, Keys, & Flexible Lists
// -----------------------------------

- Always add the key prop when rendering lists of data!
- It is a default property that React expects to find on an element
- The Key property: allows React to keep track of indiv elements to find out 
which changed, and updating only those in the DOM // <--- vid compression analogy

Unique Identifier:
- If your list comes from a DB, it will probably have some sort of unique key on it
- Dont use 'index' (see example below), it is part of the list & if the list changes React 
will update everything on it

EX:

  state = {
    personsArray: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }


  {this.state.personsArray.map((personArg, index) => {
    return <Person 
      click={() => this.deletePersonHandler(index)} // in arrow func. so func. doesn't trigger right away
      name={personArg.name} 
      age={personArg.age} 
      key={personArg.id}        // <---- unique key
    />
  })} 









