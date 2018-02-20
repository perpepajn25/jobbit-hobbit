import React from 'react'

const Hobbit = (props) => {
  console.log(props.image_url)
  return (
    <div>
      <img alt={props.name} src={props.image_url}/>
      <h3> {props.name} </h3>
      <h3> {props.title} </h3>
      <h3> {props.field} </h3>
      <h3> {props.seniority} </h3>
      <h3> {props.position} </h3>
      <h3> {props.key_skill} </h3>
      <h3> {props.employment_type} </h3>
    </div>
  )
}

export default Hobbit
