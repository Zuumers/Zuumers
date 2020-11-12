import React from 'react';
const axios = require('axios')

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var review = this.props.review
    return (
      <div style={{ backgroundColor: 'yellow' }}>
        {review.description}
      </div>
      // {
      //   id: 1,
      //   productId: 1,
      //   customer_name: "alexander",
      //   start: '5',
      //   description: 'This scooter changed my life. No more trains/buses. The best purchase I’ve better made!',
      //   timestamp: '11/02/2020',
      //   location: 'San Francisco, CA'
      // },
    )
  }
}

export default Body;