import React from 'react';
import Review from './Review.jsx';
const axios = require('axios')

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.data)
    return (
      <div>
        {
          this.props.data.slice(0, 5).map(review => (
            <Review review={review} key={review.id} />
          ))
        }
      </div>
    )
  }
}

export default Reviews;