import React, { Component } from 'react';
import { Grid, Col, Button } from 'react-materialize';
import ReactDOM from 'react-dom';

class Signup extends Component {

  render() {
    return (
      <div>
        <div className="signup">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="First Name" id="first_name" type="text" className="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input placeholder="Last Name" id="last_name" type="text" className="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="State of Residence" id="state" type="text" className="autocomplete" />
            <label for="state">State of Residence</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="v_password" type="password" className="validate" />
          <label for="v_password" data-error="Passwords do not match">Verify Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
            <input id="username" type="email" className="validate" />
            <label for="username" data-error="Username is taken!" data-success="Username available!">Username</label>
          </div>
        </div>
        <Button ><i className='material-icons'>Submit</i></Button>
      </form>
     </div>
    </div>
    )
  }  
};

export default Signup;