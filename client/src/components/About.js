import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
//import { Media, Image } from 'react-bootstrap';

const jackPic =  require('../images/jack_h.jpg')
const mariaPic = require('../images/maria_c.jpg')

/*const styles = {
    icon: {

    },
    nameText: {

    }    
}*/

class About extends Component {
  render() {

    return(
      <div>
        <div className="headline"></div>
          <div className="container">
            <div className="about"></div>
            <div className="profiles">
              <div className="row valign-wrapper">
                <div className="col s4">
                  <img width={72} height={72} className="circle" src={jackPic} alt="thumbnail" />
                </div>
                <div className="black-text s8">
                    <h5 className="align-right">Jack Hegarty</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
              leo. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
                    </p>
                </div>
              </div>
            </div>
            <div className="divider" />
            <div>
              <div className="row valign-wrapper">
                <div>
                    <h5>Maria Corrales</h5>
                    <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
              fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
              leo. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
                    </p>
                </div>
                <div className="col s4">
                  <img width={72} height={72} className="circle" src={mariaPic} alt="thumbnail" />
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default About;