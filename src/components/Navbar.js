import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="my-3">
        <nav className="navbar justify-content-end container">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Nearby Shops</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My Preferred Shops</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;