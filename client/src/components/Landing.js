import React, { 
Component,
View,
Text,
StyleSheet
} from 'react';
import { Image } from 'react-bootstrap';
import 'materialize-css/dist/css/materialize.min.css'; 
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
    const bgimage = require('./bklyn.jpg');
    const background = {
      backgroundSize : 'auto',
      overflow: 'hidden'};
    const headline = {
      position: 'absolute',
      top: '18%',
      left: '50%',
      color: 'white'
    };
    const textStyle = {
        position: 'absolute', 
        fontSize: '1rem',
        top: '25%', 
        left: '35%',
        color: 'white'
      };

      return (
          <div style={{width: 'auto'}}>
              <Image 
                style={background} responsive 
                src={bgimage}>
              </Image>
              <h1 style={headline}>Nestegg</h1>
                <p style={textStyle}>Collaborative financial advising for recent grads</p>
          </div>
      );
  }
};

export default Landing;
