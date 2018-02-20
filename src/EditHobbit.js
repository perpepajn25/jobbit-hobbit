import React from "react";
import { connect } from "react-redux";

class EditHobbit extends React.Component {
  state = {
    name: "",
    title: "",
    key_skill: ""
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.title !== this.state.title &&
      nextProps.key_skill !== this.state.key_skill
    );
  }

  componentDidUpdate() {
    this.setState({
      name: this.props.name,
      title: this.props.title,
      key_skill: this.props.key_skill
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateHobbit = e => {
    e.preventDefault();
    fetch("http://localhost:3000/hobbits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify()
    });
  };

  render() {
    console.log(this.props);
    return (
      <div style={{ textAlign: "center" }}>
        <div>{this.state.name}</div>
        <input value={this.state.title} />
        <input value={this.state.key_skill} />
      </div>
    );
  }
}

export default connect(state => ({ ...state.selectedHobbit }))(EditHobbit);
