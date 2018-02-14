import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Landing from './Landing';
import Dashboard from './Dashboard';
import dashCalendar from './Calendar';
import CalendarNew from './CalendarNew';
import About from './About';
import Footer from './Footer';

class App extends Component {
  componentDidMount() {
      this.props.fetchUser();
  }

  render() {
    return (
      <div /*className="container"*/>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/calendar" component={dashCalendar} />
            <Route exact path="/calendar/new" component={CalendarNew} />
            <Route exact path="/api/login" component={Login} />
            <Route exact path="/api/signup" component={Signup} />
            <Route exact path="/about" component={About} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
