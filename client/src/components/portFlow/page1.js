import React, { Component } from 'react';
import { Row, Col, Autocomplete, Button } from 'react-materialize';

class Page1 extends Component {
    
    render() {

    const banks = {
        'Sallie Mae': null,
        'Fidelity': null,
        'TD Bank': null,
        'Wells Fargo': null,
        'US Government': null,
        'Other': null
      }

        return(
            <div>
              <div>
                <h5>Welcome to Nestegg!</h5>
                <p>Begin creating your portfolio below.</p>
              </div>
              <div>
                <Row>
                  <Col>
                    <label>Provider</label>
                    <Autocomplete data={banks} name="provider" placeholder="Provider" id="provider" type="text" className="validate" />
                  </Col>
                </Row>
              </div>
            </div>
        )
    }
}

export default Page1;