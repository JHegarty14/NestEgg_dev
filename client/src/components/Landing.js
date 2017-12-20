import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
//import styles from '../public/stylesheet.css';
const image = require('./bklyn.jpg');


const Landing = () => {
    return (
    <body>
      <div class="container">
          <img src= {image} class="cardbg"/>
            <span class="card-title white-text text-darken-4">Test</span>
      </div>
    </body>
    );
  };

export default Landing;
