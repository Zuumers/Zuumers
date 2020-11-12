import React from 'react';
import Review from './Review.jsx';
import Summary from './Summary.jsx';

import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, getProduct, addProduct, getReviews } from '../../../actions/';
import { connect } from "react-redux";

const axios = require('axios')

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const reviewData = this.props
    console.log(reviewData)
    return (
      <div>
        <Summary />
        {
          this.props.reviewData.slice(0, 5).map(review => (
            <Review review={review} key={review.id} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    reviewData: state.getReviews,
  };
};

export default connect(mapStateToProps)(Reviews);