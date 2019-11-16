import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeShopFromPreferredList} from "../actions";

class PreferredShop extends Component {

  onClick = (shopId) => {
    this.props.removeShopFromPreferredList(shopId);
  };

  render() {
    const {id, name, picture} = this.props.shop;
    return (
      <div className="col-3 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <img alt={name} className="card-img-top" src={picture}/>
            <div className="mt-2">
              <button className="btn btn-danger mr-3" onClick={()=>this.onClick(id)}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, {removeShopFromPreferredList})(PreferredShop);