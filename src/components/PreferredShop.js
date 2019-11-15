import React, {Component} from 'react';

class PreferredShop extends Component {
  render() {
    const {name, picture} = this.props.shop;
    return (
      <div className="col-3 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <img alt={name} className="card-img-top" src={picture}/>
            <div className="mt-2">
              <a href="#" className="btn btn-danger mr-3">Remove</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PreferredShop;