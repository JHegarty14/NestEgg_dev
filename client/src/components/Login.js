import React, { Component } from 'react';
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
      <Popout url='popout.html' title='Window title' onClosing={this.popupClosed}>
        <div>Popped out content!</div>
      </Popout>
    );
  }
};

export default Login;

