import React from 'react';
import styled from 'styled-components';
const axios = require('axios')

const FooterDiv = styled.footer`
    color: #3d4246;
    background-color: #f5f5f5;
    padding-bottom: 35px;
    margin-top: 55px;
    padding: 45px 0 55px 0;
    display: block;
    box-sizing: border-box;
`
const PageWidth = styled.div`
padding-left: 55px;
    padding-right: 55px;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    display: block
`
const Hr = styled.hr`
border-bottom: 1px solid #dcdcdc;
margin: 45px 0 20px 0;
display: block;
unicode-bidi: isolate;
margin-block-start: 0.5em;
margin-block-end: 0.5em;
margin-inline-start: auto;
margin-inline-end: auto;
overflow: hidden;
`

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FooterDiv>
        <PageWidth>Footer Content</PageWidth>
        <Hr></Hr>
        <PageWidth>Logo</PageWidth>
      </FooterDiv>
    )
  }
}

export default Footer;