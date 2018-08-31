import React, { Component } from 'react';
import fire from './config/Fire';

class Home extends Component {
  logout = () => {
    fire.auth().signOut();
  }
  render() {
    return (
      <div>
        We're home!
        <button onClick={this.logout}>Log out</button>
      </div>
    );
  }
}

export default Home;
