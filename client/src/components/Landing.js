import React, { Component } from 'react';
import { Row, Col, Carousel, Slider, Slide } from 'react-materialize';


class Landing extends Component {
  render() {
    const bgimage = require('../images/bklyn.jpg');
    const background = {
      backgroundSize : 'cover',
      overflow: 'hidden',
      position: 'relative',
      display: 'block'
    };
    const headline = {
      position: 'absolute',
      top: '0',
      left: '10%',
      bottom: '500%',
      align: 'center',
      color: '#FFFFFF'
    };
    const textStyle = {
        position: 'absolute', 
        fontSize: '1rem',
        top: '38%', 
        left: '36%',
        color: '#FFFFFF',
      };
    const pad = {
      margin: '40px'
    };

      return (
          <div>
            <div className="center">
              <Slider className="z-depth-3" indicators={false}>
                <Slide src={bgimage} title="Nestegg" placement="center">
                  Collaborative financial advising for recent grads
                </Slide>
              </Slider>
            </div>
            <div className="container">
              <Row>
                <Col s={12} m={12} l={12}>
                  TEST TEST TEST
                </Col>
              </Row>
              <div className="divider" style={pad}/>
              <Row style={pad}>
                <Col s={12} m={4} l={4} className="align-center">
                  <div className="center">
                    <i className="large material-icons">pie_chart</i>
                    <h5>Data visualization simplified</h5>
                      <p>Blurb about the dashboard and data visualization. Extremely masturbatory.
                        Love too brag.</p>
                  </div>
                </Col>
                <Col s={12} m={4} l={4}>
                  <div className="center">
                    <i className="large material-icons">monetization_on</i>
                    <h5>Budget with confidence</h5>
                      <p>It free binch. Also help you not lose money or whatever. Eat the rich.</p>
                  </div>
                </Col>
                <Col s={12} m={4} l={4}>
                  <div className="center">
                    <i className="large material-icons">code</i>
                    <h5>Security and Reliability</h5>
                      <p>Blah blah blah, don't store compromising info, 256-bit auth flow encryption,
                      normal people don't know what this means, etc...</p>
                  </div>
                </Col>
              </Row>
              <div className="divider" style={pad}/>
                <div>
                  <Row>
                    TEST
                  </Row>
                </div>
            </div> 
          </div>   
     );
  }
};

export default Landing;
