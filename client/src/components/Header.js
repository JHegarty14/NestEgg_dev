import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import Login from './Login';
//import Payments from './Payments';
import { Button, Dropdown, NavItem } from 'react-materialize';

class Header extends Component {
  renderContent() {

    const button = {
      margin: '0 5px 2px 0'
    }

    switch(this.props.auth) {
      case null:
        return (
          <li key="2">
            <Dropdown trigger={<Button>Drop</Button>}>
              <NavItem>one</NavItem>
              <NavItem>two</NavItem>
              <NavItem divider />
              <NavItem href="/about">About Us</NavItem>
            </Dropdown>
          </li>
        );
      case false:
        return (
          [
            <li key="1">
              <a href="/api/login">Login</a>
            </li>,
            <li key="2">
              <a href="/api/signup">Sign Up</a>
            </li>
          ]  
        );
      default:
        return (
          [
            <li key="1"><a href="/api/logout">Logout</a></li>,
            <li key="2">
              <Dropdown trigger={<Button>Drop</Button>}>
              <NavItem>one</NavItem>
              <NavItem>two</NavItem>
              <NavItem divider />
              <NavItem href="/about">About Us</NavItem>
            </Dropdown>
            </li>
          ]
      );
    }
  }

  render() {

    const linkText = {
      color: '#ffffff',
      padding: '0 0 0 8px'
    }
    
    return (
      <div className="navbar-fixed">
        <nav className="blue-grey z-depth-3">
          <div className="nav-wrapper" id="headerContainer">
            <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
            text='#ffffff'>
              <text style={linkText}>Nestegg</text>
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

/*            <SideNav trigger={<Button>SIDE NAV DEMO</Button>} options={{ closeOnClick: true }}>
            <SideNavItem userView
              user={{
                background: 'img/office.jpg',
                image: 'img/yuna.jpg',
                name: 'John Doe',
                email: 'jdandturk@gmail.com'
              }}
            />
            <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
            <SideNavItem href='#!second'>Second Link</SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Subheader</SideNavItem>
            <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
          </SideNav>*/