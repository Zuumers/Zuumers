import reviewData from '../../../db/review_data';

const reviewReducer = (state = reviewData, action) => {
  switch (action.type) {
    case "GET_REVIEWS":
      console.log(state)
      return state
    default:
      return state;
  }
}

export default reviewReducer;