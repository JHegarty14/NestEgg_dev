import React, { Component } from 'react';
//import { Row, Col } from 'react-materialize';
import { Media, Image } from 'react-bootstrap';

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
        <div>
          <Media>
            <Media.Left align = "middle">
              <Image width={64} height={64} class="img-circle" src={jackPic} alt="thumbnail" circle/>
            </Media.Left>
            <Media.Body>
                <Media.Heading>Jack Hegarty</Media.Heading>
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
            </Media.Body>
          </Media>
        </div>
        <div>
          <Media>
            <Media.Right align = "top">
              <Image width={64} height={64} class="img-circle" src={mariaPic} alt="thumbnail" circle/>
            </Media.Right>
            <Media.Body>
                <Media.Heading>Maria Corrales</Media.Heading>
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
            </Media.Body>
          </Media>
        </div>
      </div>
    )
  }
}

export default About;