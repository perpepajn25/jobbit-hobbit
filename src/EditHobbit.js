import React from "react";
import { connect } from "react-redux";
import { updateForm, updateHobbit } from './actions'

class EditHobbit extends React.Component {

  handleChange = e => {
      this.props.updateForm({
      name: this.props.name,
      title: this.props.title,
      key_skill: this.props.key_skill,
      [e.target.name]: e.target.value
    })
  };

  updateHobbit = e => {
    e.preventDefault();
    this.props.updateHobbit({
      id: this.props.id,
      name: this.props.name,
      title: this.props.title,
      key_skill: this.props.key_skill
    })
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div>{this.props.name}</div>
        <form onSubmit={this.updateHobbit}>
          <input name="title" value={this.props.title} onChange={this.handleChange}/>
          <input name="key_skill" value={this.props.key_skill} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(state => ({ ...state.formData }), { updateForm, updateHobbit })(EditHobbit);
