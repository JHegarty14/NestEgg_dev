import React, { Component } from 'react';
import Popout from 'react-popup';
import { Grid, Col, Button } from 'react-materialize';
import ReactDOM from 'react-dom';

class Login extends Component {

  render() {

    const suForm = {
      
    }

    return (
      <div>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="State of Residence" id="state" type="text" class="autocomplete" />
            <label for="state">State of Residence</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="v_password" type="v_password" class="validate" />
          <label for="v_password" data-error="Passwords do not match">Verify Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
            <input id="username" type="email" class="validate" />
            <label for="username" data-error="Username is taken!" data-success="Username available!">Username</label>
          </div>
        </div>
      </form>
     </div>
    </div>
    )
  }  
};

export default Login;