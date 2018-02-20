export default function hobbitReducer(state = {hobbits: []}, action){
  switch(action.type){
    case 'HOBBIT_LOAD':
    return {
      hobbits: action.payload
    }

    default:
      return state
  }
}
