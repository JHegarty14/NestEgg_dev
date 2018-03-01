import React, { Component } from 'react';
import { Footer, Row } from 'react-materialize';
//import Flexbox from 'flexbox-react';

class FooterBar extends Component {
  render() {

    const headerTxt = {
      fontWeight: 'bold'
    }

    return (
      <Footer className="blue-grey" copyrights="Copyright Nestegg, 2018">
        <div>
            <Row>
              <div className="col s3 m3 l3 xl3">
              <h6 style={headerTxt}>About Nestegg</h6>
                <ul>
                  <li>Careers</li>
                  <li>Contact</li>
                  <li>Press</li>
                </ul>
              </div>
              <div className="col s3 m3 l3 xl3">
              <h6 style={headerTxt}>Tools and APIs</h6>
                <ul> 
                  <li>APIs</li>
                  <li>Open Source</li>
                </ul>
            </div>
            <div className="col s3 m3 l3 xl3">
              <h6 style={headerTxt}>Terms</h6>
                <ul>
                  <li>Legal</li>
                  <li>Privacy</li>
                </ul>
            </div>
            <div className="col s3 m3 l3 xl3">
              <img width={120} height={40} src="https://cdn1.venmo.com/production/images/PlayStore.png" alt="Google Play" />
              <img width={120} height={40} src="https://cdn1.venmo.com/production/images/AppStore.png" alt="App Store" />
            </div>
          </Row>
        </div>
      </Footer>
    )  
  }
}

export default FooterBar;