export default function hobbitReducer(
  state = { hobbits: [], selectedHobbit: null },
  action
) {
  switch (action.type) {
    case "HOBBIT_LOAD":
      return {
        ...state,
        hobbits: action.payload
      };
    case "SELECT_HOBBIT":
      return {
        ...state,
        selectedHobbit: action.payload
      };
    default:
      return state;
  }
}
