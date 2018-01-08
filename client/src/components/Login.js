import React, { Component, Popup } from 'react';
import Popout from 'react-popup';
import { Grid, Col, Button } from 'react-materialize';
import ReactDOM from 'react-dom';

class Login extends Component {
  constructor(props) {
    super(props)
    this.popout = this.popout.bind(this)
    this.state = {
      poppedOut: false
    }
  }

  popout() {
    this.setState({ poppedOut: true });
  }

  render() {
    return (
      <div>
        <h1>
          Test test test.
        </h1>
      </div>
    );
  }
};

export default Login;

