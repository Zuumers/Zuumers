import React from 'react';
import styled from 'styled-components';
const axios = require('axios')

const Nav = styled.nav`
    font-size: 18px;
    font-family: "DIN Next",sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #162950;
    line-height: 1.5;
    width: 50%;
    vertical-align: middle
`

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: '50', borderBottom: '1px solid #e4e4e4' }}>
        <div style={{ display: 'flex', justifyContent: 'start' }}>
          <div style={{ width: '10%' }}>left logo</div>
          <div style={{ width: '80%' }}>
            <Nav>mid Nav</Nav>
          </div>
          <div style={{ width: '10%' }}>right cart</div>
        </div>
      </div>
    )
  }
}

export default Header;