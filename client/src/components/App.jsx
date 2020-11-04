import React from 'react';
import Summary from './Summary.jsx';
import Reviews from './Reviews.jsx';
import data from '../../../db/review_data';
const axios = require('axios')

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
    // [{
    //   id: 1,
    //   productId: 1,
    //   customer_name: "alexander",
    //   start: '5',
    //   description: 'This scooter changed my life. No more trains/buses. The best purchase I’ve better made!',
    //   timestamp: '11/02/2020',
    //   location: ''
    // }]
  }

  componentDidMount() {
    // console.log(this.state.data)
  }
  render() {
    return (
      // <center>
      <div>
        <div style={{ paddingTop: '60' }}></div>
        <Summary />
        <Reviews data={this.state.data} />
        <div style={{ paddingTop: '60' }}></div>
      </div>
      // </center>
    )
  }
}

export default App;