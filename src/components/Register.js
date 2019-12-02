import React, {Component} from 'react';
import {register, cleanRegisterErrors} from "../actions";
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

  componentDidMount() {
    this.props.cleanRegisterErrors();
  }

  render() {
    const {errors} = this.props;
    return (
      <div className="card container">
        <div className="card-title p-3">
          <h2 className="text-center">Registration</h2>
        </div>
        <div className="card-body">
          <div className="container">
            <form onSubmit={(e)=>this.onSubmit(e)}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input name="username"
                       className="form-control"
                       id="username"
                       placeholder="Username"
                       value={this.state.username}
                       onChange={(e)=>this.onChange(e)}
                />
              </div>
              {
                errors.username && (
                  <div className="text-danger mb-3">{errors.username}</div>
                )
              }

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
              {
                errors.password && (
                  <div className="text-danger mb-3">{errors.password}</div>
                )
              }

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

              <button type="submit" className="btn btn-primary">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errorsRegister.errors
  }
};

export default connect(mapStateToProps, {register, cleanRegisterErrors})(withRouter(Register));