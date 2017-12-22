import { connect } from 'react-redux';
import React, { Component } from 'react';
//import { Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
//import ReactDOM from 'react-dom';
import $ from 'jquery';

class NavDropdownExample extends Component {

render() {
    return (
      <li class='dropdown'>
        <a class='dropdown-toggle' href='#' data-toggle='dropdown'>Test</a>
            <ul class='dropdown-menu'>
              <li><a href="#">one</a></li>
              <li><a href="#">two</a></li>
              <li class="divider"></li>
              <li><a href="#">three</a></li>
              <li><a href="#">four</a></li>
              <li><a href="#">five</a></li>
            </ul>
      </li>    
      );
  }
};

export default NavDropdownExample;
