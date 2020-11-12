import React from 'react';
import Header from './Header';
import Body from './Body';
const axios = require('axios')

class Review extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.review)
    return (
      <div style={{ padding: '10', borderTop: '1px solid #eee' }}>
        <div>
          <Header review={this.props.review} />
          <div style={{ padding: '4' }} />
          <Body review={this.props.review} />
          <div style={{ padding: '10' }}></div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <span>upvote |</span>
            <span>|  downvote</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Review;