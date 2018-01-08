import React, { Component } from 'react';
//import { Row, Col } from 'react-materialize';
import { Image, Row, Col, Grid } from 'react-bootstrap';

const jackPic =  require('../images/jack_h.jpg')
const mariaPic = require('../images/maria_c.jpg')

const styles = {
    icon: {

    },
    nameText: {

    }    
}

class About extends Component {
  render() {

    return(
      <Grid>
        <Row>
          <Col s={4} m={4} l={4}>
            <Image src={jackPic} circle/>
            <h1>
              Jack Hegarty
            </h1>
          </Col>
          <Col s={8} m={8} l={8}>
            <p>
              Test test test test test
            </p>
          </Col>
        </Row>
        <Row>
          <Col s={8} m={8} l={8}>
            <p>
              Test test test test test
            </p>
          </Col>
          <Col s={4} m={4} l={4}>
            <Image src={mariaPic} circle/>
            <h1>
            </h1>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default About;