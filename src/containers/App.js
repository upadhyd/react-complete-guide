import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import cssClasses from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "wer1", name: "Raka", age: 245 },
      { id: "sad1", name: "Sabu", age: 145 },
      { id: "zccv1", name: "Eternus", age: 1830045 }
    ],
    showPersons: false
  };

  onChangeNameHandler = (event, id) => {
    //Get the index for the persons based on id
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //Defalte the person object in persons for the given object to a new constant person object
    const person = {
      ...this.state.persons[personIndex]
    };

    //Take in the event change value passed from the input field update event in Person object
    person.name = event.target.value;

    //Now to update persons immumatibily, deflate the state.persons to persons
    const persons = [...this.state.persons];

    //Update the new array object to the new event change value at the index
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const currVal = this.state.showPersons;
    this.setState({
      showPersons: !currVal
    });
  };

  deletePersonsHandler = index => {
    //Cannot do this as this will mutate the state.
    //const persons = this.state.persons;
    //Better apprach is to make the state immitable
    //using slice() methods without passing any parameters and this will create a duplicate array
    //const persons = this.state.persons.slice();
    //The EC6 syntax for the above is using the spread operator ...
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.onChangeNameHandler}
        />
      );
    }

    return (
      <div className={cssClasses.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          persons={this.state.persons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
