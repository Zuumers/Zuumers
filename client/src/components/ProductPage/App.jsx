import React from 'react';
import Modal from 'react-modal';

import Collection from './Collections/AppCollection';
import Reviews from './Reviews/Reviews';

const axios = require('axios')

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //
    }
  }

  componentDidMount() {
    console.log('componentDidMount @ App.jsx is working')
  }

  render() {
    return (
      <div>
        {/* <Modal isOpen={true}>
          <h2>modal</h2>
        </Modal> */}
        <div style={{ padding: '50', border: '1px solid black' }}>PRODUCT PLACE HOLDER</div>
        <Collection />
        <Reviews />
      </div>

    )
  }
}

export default App;
