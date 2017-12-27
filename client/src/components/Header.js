import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import NavDd from './Dropdown';
import { Dropdown, Button, NavItem } from 'react-materialize';
import $ from 'jquery';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return(
            <NavDd />
        );
      case false:
        return (
          [
            <li key="1">
              <a href="/auth/google">Login</a>
            </li>,
            <li key="2">
              <Dropdown trigger={<Button>Drop me!</Button>}>
                <NavItem>one</NavItem>
                <NavItem>two</NavItem>
                <NavItem divider />
                <NavItem>three</NavItem>
              </Dropdown>
            </li>
          ]  
        );
      default:
        return (
          [
            <li key="1"><a href="/api/logout">Logout</a></li>,
            <li key="2">
              <a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i class="mdi-navigation-arrow-drop-down right"></i></a>
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
      <nav class="green darken-4">
        <div className="nav-wrapper" id="headerContainer">
          <Link
          to={this.props.auth ? '/surveys' : '/'}
          className="left brand-logo"
          text='#fdd835'>
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
