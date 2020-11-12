import React from 'react';
// import data from '../../../db/zuumers_data';
import Bundles from './Bundles.jsx';
import Item from './Item.jsx';
const axios = require('axios')

class AppCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount is working');
    // console.log(data)
  }
  render() {
    return (
      <center>
        collection
        <Bundles />
      </center>
    )
  }
}

export default AppCollection;

{/* <div style={{ paddingTop: '60' }}></div>
        <h2>Recommended Accessories</h2>
        <div style={{ paddingTop: '60' }}></div>
        <div>
          <Bundles data={this.props.data} />
        </div>
        <div style={{ paddingTop: '60' }}></div>
        <p>See all Mantis electric scooter accessories and parts.</p> */}