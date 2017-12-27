import { connect } from 'react-redux';
import React, { Component } from 'react';
//import { Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
//import ReactDOM from 'react-dom';
import $ from 'jquery';

class NavDd extends Component {

render() {
    return (
      <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">one two threee</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
      </ul>  
      );
  }
};

export default NavDd;
