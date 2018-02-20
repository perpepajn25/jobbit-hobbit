
import hobsWithJobs from '../data/hobsWithJobs'

export function fetchHobsWithJobs() {
  return (dispatch) => {
    dispatch({type: "HOBBITS_LOADING"})
    fetch('http://localhost:3000/hobbits')
    .then(resp=> resp.json())
    .then(data => {
      dispatch({type: "HOBBIT_LOAD", payload: data})
    })
  }
}

export function selectHobbit(hobbit) {
  return { type: "SELECT_HOBBIT", payload: hobbit };
}

export function updateHobbit({id, name, title, key_skill}) {
  return dispatch => {
    fetch(`http://localhost:3000/hobbits/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({hobbit: {name, title, key_skill}
      })
    })
    .then(res => res.json())
    .then(data => {
      dispatch(setHobbit(data))
    })
  }

}

export function setHobbit(hobbit) {
  return {type: "SET_HOBBIT", payload: hobbit}
}

export function updateForm(formData) {

  return {type: "UPDATE_FORM", payload: formData}
}
