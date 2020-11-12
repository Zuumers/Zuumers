import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../actions/';

const axios = require('axios')

function Product() {
  const cartReducer = useSelector(state => state.cartReducer)
  const dispatch = useDispatch();
  return (
    <div>
      Product Component
      <button onClick={() => dispatch(addItemToCart({ 1: 'product_1' }))}>add to cart</button>

      <button onClick={() => dispatch(removeItemFromCart())}>remove from cart</button>
    </div>
  )
}

export default Product;