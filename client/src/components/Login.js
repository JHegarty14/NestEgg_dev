import React, { Component } from 'react';
import Popout from 'react-popup';
import { Grid, Col, Button } from 'react-materialize';
import ReactDOM from 'react-dom';

class Login extends Component {
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

  popupClosed() {
    this.setState({ poppedOut: false })
  }

  render() {
    if (this.state.isPoppedOut) {
      return (
        <Popout title='Login' onClosing={this.popupClosed}>
          <div>
            <h1>
              Test test test
            </h1>
          </div>
        </Popout>
      )
    } else {
        return (
          <div>
            <LoginBtn handleClick={this.popupOpen}>
              Login
            </LoginBtn>
          </div> 
        )
    }
  }

}

const LoginBtn = props => (
      <button className="button" onClick={props.handleClick}>
        {props.children}
      </button>
  );

export default Login;