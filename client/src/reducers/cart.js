const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // return state + action.payload + ','
      return [
        ...state,
        action.payload
      ]
    case "REMOVE_ITEM":
      // need to find specific item for real life
      return state.splice(0, state.length - 1)
    default:
      return state;
  }
}

// let store = createStore(counter);
export default cartReducer;