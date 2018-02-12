import React, { Component } from 'react';
import { Footer } from 'react-materialize';
//import Flexbox from 'flexbox-react';

class FooterBar extends Component {
  render() {
    return (
      <Footer className="blue-grey" copyrights="Copyright Nestegg, 2018">
        <div>
            <row>
              <div className="col s6 m3 l3 xl3">
              <h5>About Nestegg</h5>
                <ul>
                  <li>Careers</li>
                  <li>Contact</li>
                  <li>Press</li>
                </ul>
              </div>
              <div className="col s6 m3 l3 xl3">
              <h5>Tools and APIs</h5>
                <ul> 
                  <li>APIs</li>
                  <li>Open Source</li>
                </ul>
            </div>
            <div className="col s6 m3 l3 xl3">
              <h5>Terms</h5>
                <ul>
                  <li>Legal</li>
                  <li>Privacy</li>
                </ul>
            </div>
            <div className="col s6 m3 l3 xl3 align-right">
              <img width={120} height={40} src="https://cdn1.venmo.com/production/images/PlayStore.png" alt="Google Play" />
              <img width={120} height={40} src="https://cdn1.venmo.com/production/images/AppStore.png" alt="App Store" />
            </div>
          </row>
        </div>
      </Footer>
    )  
  }
}

export default FooterBar;