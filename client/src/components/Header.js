import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
//import Payments from './Payments';
import { Button, Dropdown, NavItem, SideNav, SideNavItem, Modal, Icon } from 'react-materialize';

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false
    };
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }
  
  toggleLoginModal() {
    this.setState({ showLoginModal: !this.state.showLoginModal });
  }

  renderContent() {

    const button = {
      margin: '0 0px 2px 5px',
      background: '#616161'
    };

    switch(this.props.auth) {
      case null:
        return (
          <li key="1">
            <SideNav trigger={<Button style={button}><i className="material-icons">menu</i></Button>}>
              <SideNavItem><div className="uservw">
                <div>
                  <img src="" />
                </div>
                <a href="/dashboard"><span></span></a>
              </div></SideNavItem>
                <SideNavItem>one</SideNavItem>
                <SideNavItem>two</SideNavItem>
                <SideNavItem divider />
                <SideNavItem href="/about">About Us</SideNavItem>
            </SideNav>
          </li>
        );
      case false:
        return (
          /*<li key="2">
            <SideNav trigger={<Button style={button}><i className="material-icons">menu</i></Button>}>
              <SideNavItem><div className="uservw">
                <div>
                  <img src="" />
                </div>
                <a href="/dashboard"><span></span></a>
              </div></SideNavItem>
                <SideNavItem>one</SideNavItem>
                <SideNavItem>two</SideNavItem>
                <SideNavItem divider />
                <SideNavItem href="/about">About Us</SideNavItem>
            </SideNav>
          </li>*/
          [
            <li key="1">
              <Modal header='Login' trigger={ <a>Login</a> } actions="">
                <Login />
              </Modal>
            </li>,
            <li key="2">
              <Modal header='Sign Up' trigger={ <a>Sign Up</a> } actions="">
                <Signup />
              </Modal>
            </li>
          ]
        );
      default:
        return (
          [
          <li>
            <SideNav trigger={<Button style={button}><i className="material-icons">menu</i></Button>}>
              <SideNavItem><div className="uservw">
                <div>
                  <img src="" />
                </div>
                <a href="/dashboard"><span></span></a>
              </div></SideNavItem>
                <SideNavItem>one</SideNavItem>
                <SideNavItem href="/api/logout">Log Out</SideNavItem>
                <SideNavItem divider />
                <SideNavItem href="/about">About Us</SideNavItem>
            </SideNav>
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
            className="right brand-logo">
              <text style={linkText}>Nestegg</text>
            </Link>
            <ul className="left">
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