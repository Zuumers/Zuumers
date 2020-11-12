import React from 'react';
import styled from 'styled-components';
const axios = require('axios')

const ImgDiv = styled.div`
width: 50px;
line-height: 50px;
border-radius: 50%;
color: #666;
background-color: #e9e9e9;
`
const VerifiedDiv = styled.div`
box-sizing: border-box;
padding: 3px 7px;
font-size: 11px;
line-height: 1;
vertical-align: text-top;
content: 'Verified';
display: inline-block;
color: #ffffff;
background-color: #ff6d6d;
`
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var review = this.props.review
    var avatarLink = `https://avatar.oxro.io/avatar.svg?name=${review.customer_name}&background=f39c12&length=1`;
    // https://stackoverflow.com/questions/49442165/how-do-you-add-borderradius-to-imagebackground
    // console.log(review)
    var starCount = parseInt(review.star);
    // if (start)
    return (
      <div style={{ display: 'flex', justifyContent: "start" }}>
        <img src={avatarLink}
          height="50" width="50" overflow='hidden'></img>
        <div>
          <div style={{ display: 'flex', justifyContent: "start" }}>
            {/* <starA></starA> */}
            <div>star</div>
            <div>{review.timestamp}  .</div>
          </div>
          <div style={{ display: 'flex', justifyContent: "start" }}>
            <VerifiedDiv>Verified</VerifiedDiv>
            <div>{review.customer_name} .</div>
            <div>{review.location} .</div>
          </div>
        </div>
      </div >

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

export default Header;