import React, { Component } from 'react';
import NavBar from './nav_bar'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}
