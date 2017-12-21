import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
const ReactDOM = require('react-dom');

class NavDropdownExample extends Component {

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1">Action</MenuItem>
          <MenuItem eventKey="4.2">Another action</MenuItem>
          <MenuItem eventKey="4.3">Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
};

export default NavDropdownExample;
//ReactDOM.render(<NavDropdownExample />, document.getElementById('dropdown-basic-default'));