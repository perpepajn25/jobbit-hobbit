import React from "react";
import { connect } from "react-redux";
import { selectHobbit } from "./actions";

const Hobbit = props => {
  console.log(props.image_url);

  return (
    <div className="props" onClick={() => props.selectHobbit(props)}>
      <img alt={props.name} src={props.image_url} />
      <h3> Name: {props.name} </h3>
      <h3> Title: {props.title} </h3>
      <h3> Field: {props.field} </h3>
      <h3> Seniority: {props.seniority} </h3>
      <h3> Position: {props.position} </h3>
      <h3> Key Skill: {props.key_skill} </h3>
      <h3> Employment Type: {props.employment_type} </h3>
    </div>
  );
};

export default connect(null, { selectHobbit })(Hobbit);
