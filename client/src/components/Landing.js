import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//import styles from '../public/stylesheet.css';
const image = require('./bklyn.jpg');


const Landing = () => {
    return (
    <body>
      <div class="jumbotron" justified>
        <span class="card-title white-text text-darken-4">Test</span>
        <img src= {image} class="cardbg"/>
           
      </div>
    </body>
    );
  };

export default Landing;
