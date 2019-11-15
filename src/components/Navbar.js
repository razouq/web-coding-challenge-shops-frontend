import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="my-3">
        <nav className="navbar justify-content-end container">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/nearby-shops">Nearby Shops</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/preferred-shops">My Preferred Shops</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;