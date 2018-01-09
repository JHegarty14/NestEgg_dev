import React, { Component } from 'react';
import Popout from 'react-popup';
import { Grid, Col, Button } from 'react-materialize';
import ReactDOM from 'react-dom';

class Login extends Component {
  constructor(props) {
    super(props)
    this.popout = this.popout.bind(this)
    this.state = {
      poppedOut: true
    }
  }

  popout() {
    this.setState({ poppedOut: true });
  }

  render() {
    if (this.state.isPoppedOut) {
      return (
        <Popout title='Login' onClosing={this.popupClosed}>
          <div>
            Test test test
          </div>
        </Popout>
      )
    } else {
        return (
          <div>
            <span onClick={this.popout} />
              <a>Login</a>
          </div> 
        )
    }
  }

  popupClosed() {
    this.setState({ poppedOut: false })
  }

}

export default Login;