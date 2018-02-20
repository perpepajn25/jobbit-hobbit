import React from "react";
import { connect } from "react-redux";
import { selectHobbit } from "./actions";

const Hobbit = hobbit => {
  console.log(hobbit.image_url);

  return (
    <div className="hobbit" onClick={() => hobbit.selectHobbit(hobbit)}>
      <img alt={hobbit.name} src={hobbit.image_url} />
      <h3> Name: {hobbit.name} </h3>
      <h3> Title: {hobbit.title} </h3>
      <h3> Field: {hobbit.field} </h3>
      <h3> Seniority: {hobbit.seniority} </h3>
      <h3> Position: {hobbit.position} </h3>
      <h3> Key Skill: {hobbit.key_skill} </h3>
      <h3> Employment Type: {hobbit.employment_type} </h3>
    </div>
  );
};

export default connect(null, { selectHobbit })(Hobbit);
