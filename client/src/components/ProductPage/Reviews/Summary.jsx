import React from 'react';
const axios = require('axios')

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.review)
    return (
      <div style={{ padding: '10', borderTop: '1px solid #eee' }}>
        Summary of Customer Reviews
        <div>
          <div>5 stars</div>
          <div>4 stars</div>
          <div>3 stars</div>
          <div>2 stars</div>
          <div>1 stars</div>
        </div>
      </div>
    )
  }
}

export default Summary;