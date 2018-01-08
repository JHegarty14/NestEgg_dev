import React, { Component } from 'react';
import Popout from 'react-popup';

class Dashboard extends Component {
  render() {
    return(
      <Popout url='popout.html' title='Window title' onClosing={this.popupClosed}>
        <div>Popped out content!</div>
      </Popout>
    )
  }
}
export default Dashboard;
