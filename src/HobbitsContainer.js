import React from 'react'
import Hobbit from './Hobbit'
import { connect } from 'react-redux'
import { fetchHobsWithJobs } from './actions'

class HobbitsContainer extends React.Component {
  componentDidMount(){
    this.props.fetchHobsWithJobs()
  }

  render(){
    const hobsWithJobs = this.props.hobbits.map((hobbit) => {
      return <Hobbit {...hobbit} />
    })
    return (
      <div>
        {hobsWithJobs}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHobsWithJobs: ()=>(dispatch(fetchHobsWithJobs()))
  }
}

export default connect((state)=> ({hobbits: state.hobbits}), mapDispatchToProps)(HobbitsContainer)
