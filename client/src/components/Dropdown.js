import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter, Route } from 'react-router-dom';
import React, { Component } from 'react';
const ReactCSSTransitionGroup = require('react-transition-group');
const ReactDOM = require('react-dom')

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({
      menuActive: menuState
    });
  }

  render() {
    let menu;
    if(this.state.menuActive) {
      menu = <div>
                <ul>
                  <li>First Item </li>
                  <li>Second Item </li>
                  <li>Third Item </li>
                </ul>
              </div>
    } else {
      menu = "";
    }
    return (
      <div id = "menu">
        <i className = "fa fa-plus" onClick = { this.toggleMenu }/>
      <ReactCSSTransitionGroup transitionName = "menu" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
        {menu}
      </ReactCSSTransitionGroup>
    </div>
    )
  }
}

export default connect(null, actions)(DropDown);
