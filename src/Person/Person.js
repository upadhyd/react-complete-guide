import React from "react";
import cssClasses from "./Person.css";

const person = props => {
  return (
    <div className={cssClasses.Person}>
      <p onClick={props.click}>
        This is {props.name} and I'm is the greatest developer in the world. Age
        :
        {props.age}{" "}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
