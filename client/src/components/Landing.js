import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col } from 'react-materialize';


class Landing extends Component {
  render() {
    const bgimage = require('../images/bklyn.jpg');
    const background = {
      backgroundSize : 'cover',
      overflow: 'hidden'};
    const headline = {
      position: 'absolute',
      top: '25%',
      left: '42%',
      color: '#fdd835'
    };
    const textStyle = {
        position: 'absolute', 
        fontSize: '1rem',
        top: '38%', 
        left: '40%',
        color: '#fdd835'
      };

      return (
          <div className="grey lighten-3">
            <Row>
              <Col s={12} m={12} l={12}>
                <Image
                  style={background}
                  src={bgimage} responsive/>
                <h1 style={headline}>Nestegg</h1>
                  <p style={textStyle}>Collaborative financial advising for recent grads</p>
              </Col>
            </Row>
            <Row>
              <Col s={1} m={2} l={3}>TEST TEST TEST
              </Col>
            </Row>
          </div>   
     );
  }
};

export default Landing;
