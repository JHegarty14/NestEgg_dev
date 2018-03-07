import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Pagination, Autocomplete } from 'react-materialize';

class Portfolio extends Component {
    render() {
    
    const banks = {
        'Sallie Mae': null,
        'Fidelity': null,
        'TD Bank': null,
        'Wells Fargo': null,
        'US Government': null,
    }
        return(
            <div>
              <div className="container">
                <form className="col s12" method="POST" action="/portfolio">
                  <div className="row">
                    <h5>Welcome to Nestegg!</h5>
                    <p>Let's get started with some fuckin LOAN PAYMENTS</p>
                  </div>
                    <div className="row">
                      <label for="instiution" className="input-field col s4">Select your loan provider:</label>
                    </div>
                    <div className="input-field col s8">
                      <Autocomplete title="Institution" data={banks} />             
                    </div>
                </form>
                <Pagination className="center" items={5} />
              </div>
            </div>
        )
    }
}

export default Portfolio;