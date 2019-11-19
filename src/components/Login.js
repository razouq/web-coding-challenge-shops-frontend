import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {login, cleanLoginErrors} from './../actions';

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

  componentDidMount() {
    this.props.cleanLoginErrors();
  }

  render() {
    const {errors} = this.props;
    return (
      <div className="card container">
        <div className="card-title p-3">
          <h2 className="text-center">Login</h2>
        </div>
        <div className="card-body">
          <div className="container">
            <form onSubmit={(e)=>this.onSubmit(e)}>
              {
                errors.login && (
                  <div className="text-danger mb-3">{errors.login}</div>
                )
              }
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

              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errorsLogin.errors
  }
};


export default connect(mapStateToProps, {login, cleanLoginErrors})(withRouter(Login));