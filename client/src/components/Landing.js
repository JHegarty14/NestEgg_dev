import React, { 
Component,
View,
Text,
StyleSheet
} from 'react';
import { Image } from 'react-bootstrap';
import { Row, Col, img } from 'react-materialize';
//import 'materialize-css/dist/css/materialize.min.css'; 
//import styles from '../public/stylesheet.css';

/*let styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 320
  },
  backdrop: {
    paddingTop: 60,
    width: 100,
    height: 120,
  },
  backdropView: {
    height: 120,
    width: 320,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
};*/


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
          <div>
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
