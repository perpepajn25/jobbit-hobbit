import React from "react";
import Hobbit from "./Hobbit";
import EditHobbit from "./EditHobbit";
import { connect } from "react-redux";
import { fetchHobsWithJobs } from "./actions";

class HobbitsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchHobsWithJobs();
  }

  render() {
    const hobsWithJobs = this.props.hobbits.map(hobbit => {
      return <Hobbit {...hobbit} />;
    });
    return (
      <div>
        <div className="logo">Jobbit</div>
        <EditHobbit />
        <div className="hobbitsContainer">{hobsWithJobs}</div>
      </div>
    );
  }
}

export default connect(state => ({ hobbits: state.hobbits }), {
  fetchHobsWithJobs
})(HobbitsContainer);
