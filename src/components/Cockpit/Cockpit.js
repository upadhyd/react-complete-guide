import React from "react";
import cssClasses from "./Cockpit.css";

const cockpit = props => {
  const classes = [];
  let btnClass = "";
  if (props.persons.length <= 2) {
    classes.push(cssClasses.red);
  }
  if (props.persons.length <= 1) {
    classes.push(cssClasses.weight);
  }

  if (props.showPersons) {
    btnClass = cssClasses.Red;
  }
  return (
    <div>
      <p className={classes.join(" ")}>
        Greatest React Developer in the making
      </p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
