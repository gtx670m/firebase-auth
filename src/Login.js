import React, { Component } from 'react';
import fire from './config/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  saveData = (event) => {
    var target = event.target; //trỏ đến các ô input
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  login = (event) => {
    event.preventDefault(); //chặn submit như mặc định
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
    }).catch((error)=>{
        console.log(error);
    });
  }
  signup = (event) => {
    event.preventDefault(); //chặn submit như mặc định
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
    }).catch((error)=>{
        console.log(error);
    });
  }
  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Panel title</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.login}>
                  <div className="form-group">
                    {/* textBox //////////////////////////////////////////////////////////////////////////////////// */}
                    <label>email: </label>
                    <input
                      type="text" className="form-control" placeholder="type here"
                      name="email"
                      onChange={this.saveData}
                      value={this.state.userName} />

                    <label>Password: </label>
                    <input
                      type="password" className="form-control" placeholder="type here"
                      name="password"
                      onChange={this.saveData}
                      value={this.state.passWord} />                                                   
                  </div>

                  <button type="submit" className="btn btn-primary">Login</button>&nbsp;
                  <button onClick={this.signup} className="btn btn-primary">Sign Up</button>&nbsp;
                  <button type="reset" className="btn btn-default">Clear</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
