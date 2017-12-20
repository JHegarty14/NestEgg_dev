import React from 'react';
const backgroundImage = require('./bklyn.jpg');
//import { LandingBackground, LandingImgText } from '../images/LandingBackground';

const Dashboard = () => {
    return (
        <div>
          <div className='background-image' style = {{ background: 'url(' + backgroundImage + ')'}}>
          </div>
          <h2>
            Dashboard
          </h2>
        </div>
    );
};

export default Dashboard;
