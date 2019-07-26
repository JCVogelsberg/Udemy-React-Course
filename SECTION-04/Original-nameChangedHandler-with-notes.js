  nameChangedHandler = (event, id) => {     // 'id' CANNOT be changed, its a reserved word, apparently
    const personIndex = this.state.personsArray.findIndex(p => {
      console.log(id);
      return p.id === id;
    })

    const personVar = {                        // creates a copy, changes the copy
      ...this.state.personsArray[personIndex]  // spread operator distr. all properties of fetched object into new object 'personVar'
    };
      //  Alternate option
      //  const personVar = { Object.assign({}, this.state.personsArray[personIndex]); };

    personVar.name = event.target.value;  // update the name in the copy

    const newPersonsArray = [...this.state.personsArray];   // saves the state as 'newPersonsArray'
    newPersonsArray[personIndex] = personVar;

    this.setState({
      personsArray: newPersonsArray // set state to value of the copy you made & changed
    }) 
  }