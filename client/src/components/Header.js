import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { NavDropdown, DropdownButton, Button, MenuItem } from 'react-bootstrap';
import NavDropdownExample from './Dropdown';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return(
            <NavDropdownExample />
        );
      case false:
        return (
            <li key="2">
              <a href="/auth/google">Login</a>
            </li>
        );
      default:
        return (
          [
            <li key="1"><a href="/api/logout">Logout</a></li>,
            <li key="2">
              <DropdownButton bsStyle={'default'} id={'dropdown-basic-default'}>
                <ul>
                  <MenuItem eventKey="1">Test</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="1">Test</MenuItem>
                </ul>  
                </DropdownButton>
            </li>
/*          <li key="2" style={{ margin: '0 10px' }}>
              <DropDown />
            </li>*/
          ]
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper" id="headerContainer">
          <Link
          to={this.props.auth ? '/surveys' : '/'}
          className="left brand-logo"
          >
            Nestegg
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
