import React, { Component } from 'react';
import { Row, Col, Modal } from 'react-materialize';

class Login extends Component{
  render() {
  return (
      <div>
          <div className="login">
              <form className="">
                  <div className="input-field col s8">
                      <i className="material-icons prefix">account_circle</i>
                      <input  id="username" type="text" className="validate"/>
                      <label htmlFor="username">User Name</label>
                  </div>
                  <div className="input-field col s8">
                      <i className="material-icons prefix">vpn_key</i>
                      <input id="password" type="password" className="validate"/>
                      <label htmlFor="password">Password</label>
                  </div>
                  <div className="center input-field col s6">
                          <input type="checkbox" className="filled-in" id="filled-in-box" defaultChecked="unchecked" />
                          <label htmlFor="filled-in-box">Remember me</label>
                  </div>
                  <div className="center input-field col s12">
                      <a href="/auth/local" className="login-button waves-effect waves-light btn center">Login</a>
                  </div>
                  <div className="center input-field col s12">Or</div>
                  <div className="center input-field col s12">
                      <a href="/auth/google" className="login-button waves-effect waves-light btn center">Login with Google</a>
                  </div>
                  <div className="row input-field col s12">
                      <div className="col s6 left-align">
                          <a className="modal-trigger " onClick={this.handleShowModal} >Register Now</a>
                      </div>
                      <div className="col s6 right-align">
                          <a>Forgot Password?</a>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  );
  }
  };
  
export default Login;