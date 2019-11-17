import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from './../actions';

class Navbar extends Component {

  logout = () => {
    this.props.logout();
  };

  render() {
    const {validToken} = this.props;
    return (
      <div className="my-3">
        <nav className="navbar container">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/nearby-shops">Nearby Shops</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/preferred-shops">My Preferred Shops</Link>
            </li>

          </ul>
          <ul className="nav justify-content-end">
            {
              validToken &&
                <div>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" onClick={()=>this.logout()}>Logout</Link>
                  </li>
                </div>
            }
            {
              !validToken &&
                <div>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">register</Link>
                  </li>
                </div>
            }
            {
              !validToken &&
                <div>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                </div>
            }
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    validToken: state.security.validToken
  }
};

export default connect(mapStateToProps, {logout})(Navbar);