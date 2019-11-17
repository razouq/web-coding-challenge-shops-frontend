import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {login} from './../actions';

class Login extends Component {

  state = {
    username: "",
    password: ""
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.login(user, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={(e)=>this.onSubmit(e)}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input name="username"
                   className="form-control"
                   id="username"
                   placeholder="Enter email"
                   value={this.state.username}
                   onChange={(e)=>this.onChange(e)}
            />

          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input name="password"
                   type="password"
                   className="form-control"
                   id="password"
                   placeholder="Password"
                   value={this.state.password}
                   onChange={(e)=>this.onChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}


export default connect(null, {login})(withRouter(Login));