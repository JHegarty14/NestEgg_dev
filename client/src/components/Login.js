import React, { Component } from 'react';
import { Row, Col, Modal } from 'react-materialize';

class Login extends React.Component{
  render(){
  return(
      <div>
          <div className="login">
              <div className="">
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
                          <input type="checkbox" className="filled-in" id="filled-in-box" defaultChecked="checked" />
                          <label htmlFor="filled-in-box">Remember me</label>
                  </div>
                  <div className="center input-field col s12">
                      <a className="login-button waves-effect waves-light btn center">Login</a>
                  </div>
                  <div className="row input-field col s12">
                      <div className="col s6 left-align">
                          <a className="modal-trigger " onClick={this.handleShowModal} >Register Now</a>
                      </div>
                      <div className="col s6 right-align">
                          <a>Forgot Password?</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
  }
  };
  
export default Login;