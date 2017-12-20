import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Dropdown } from 'react-bootstrap';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Calendar from './Calendar';
import CalendarNew from './CalendarNew';

class App extends Component {
  componentDidMount() {
      this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/calendar" component={Calendar} />
            <Route path="/calendar/new" component={CalendarNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
