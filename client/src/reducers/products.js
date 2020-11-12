import data from '../../../db/product_data'

const productReducer = (state = data, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        action.payload
      ]
    case "GET_PRODUCT":
      console.log(state)
      return state
    default:
      return state;
  }
}

export default productReducer;