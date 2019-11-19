import React, {Component} from 'react';
import {register} from "../actions";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

class Register extends Component {

  state = {
    username: "",
    password: "",
    passwordConfirm:""
  };



  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    this.props.register(newUser, this.props.history);
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
          <div className="form-group">
            <label htmlFor="password-confirmation">Password Confirmation</label>
            <input name="passwordConfirm"
                   type="password"
                   className="form-control"
                   id="password-confirmation"
                   placeholder="Password Confirmation"
                   value={this.state.passwordConfirm}
                   onChange={(e)=>this.onChange(e)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {register})(withRouter(Register));