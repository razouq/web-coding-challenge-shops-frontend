import React, {Component} from 'react';
import {connect} from 'react-redux';
import {likeShop} from "../actions";

class NearbyShop extends Component {

  like = (shopId) => {
    console.log(shopId);
    this.props.likeShop(shopId);
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
              <button  className="btn btn-danger mr-3" >Dislike</button>
              <button  className="btn btn-success" onClick={()=>this.like(id)}>Like</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, {likeShop})(NearbyShop);