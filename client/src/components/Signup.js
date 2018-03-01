import React, { Component } from 'react';
import { Grid, Col, Button } from 'react-materialize';

class Signup extends Component {

  render() {
    return (
      <div>
        <div className="signup login-form">
          <form className="col s12" method="POST" action="/auth/signup">
            <div className="row">
              <div className="input-field col s6">
                <input name="firstName" placeholder="First Name" id="first_name" type="text" className="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input name="lastName" placeholder="Last Name" id="last_name" type="text" className="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
        <div className="row">
          <div className="input-field col s12">
            <input name="state" placeholder="State of Residence" id="state" type="text" className="autocomplete" />
            <label for="state">State of Residence</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input name="password" id="password" type="password" className="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input name="passwordConf" id="passwordConf" type="password" className="validate" />
          <label for="passwordConf" data-error="Passwords do not match">Verify Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input name="email" id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
            <input name="username" id="username" type="text" className="validate" />
            <label for="username" data-error="Username is taken!" data-success="Username available!">Username</label>
          </div>
        </div>
        <Button type="submit" value="Submit">Submit</Button>  
      </form>
     </div>
    </div>
    )
  }  
};

export default Signup;