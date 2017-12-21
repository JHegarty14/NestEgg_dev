import React, { 
Component,
View,
Text,
Image,
StyleSheet
} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//import styles from '../public/stylesheet.css';
const image = require('./bklyn.jpg');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000000',
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
});


const Landing = () => {
    return (
    <body>
      <div class="jumbotron" style={styles.container}>
        <img src= {image} class="cardbg" style={styles.backdrop}>
          <View style={styles.backdropView}>
            <Text style={styles.headline}>Test</Text>
          </View>
        </img>                     
      </div>
    </body>
    );
  };

export default Landing;
