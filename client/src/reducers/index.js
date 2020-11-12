import cartReducer from './cart';
import getProduct from './products';
import getReviews from './reviews';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  cartReducer, getProduct, getReviews
})

export default allReducers;

