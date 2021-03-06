import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import Portfolio from './Portfolio';
import dashCalendar from './Calendar';
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
            <Route exact path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
