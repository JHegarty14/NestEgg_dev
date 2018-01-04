import React, { Component } from 'react';
import { Grid, Col, Button } from 'react-materialize';

class Login extends Component {
    componentDidMount() {
        const url = '/auth';
        window.opener.open(url, '_self');
        window.opener.focus();
        window.close();
      }

    render() {
        return (
          <div style={{ display: 'popup' }}>
            <h1>
              AAAAAAAAA
            </h1>
          </div>
        );
    }
}

export default Login;