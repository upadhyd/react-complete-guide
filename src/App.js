import React, { Component } from "react";
import Person from "./Person/Person";
import Radium from "radium";
import "./App.css";

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.onChangeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("weight");
    }

    return (
      <div className="App">
        <p className={classes.join(" ")}>
          Greatest React Developer in the making
        </p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
