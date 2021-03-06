import React, { Component } from 'react';
import fire from './config/Fire';
import Home from './Home';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }

  render() {
    var ElmDisplay =  this.state.user ? <Home /> : <Login />;
    return (
      <div className="App">
        {ElmDisplay}
      </div>
    );
  }
}

export default App;
