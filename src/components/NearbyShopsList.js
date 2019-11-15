import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNearbyShops} from "../actions";
import NearbyShop from "./NearbyShop";



class NearbyShopsList extends Component {

  componentDidMount() {
    this.props.fetchNearbyShops();
  }

  renderList() {
    return this.props.nearbyShops.map(shop => {
      return (
          <NearbyShop key={shop.id} shop={shop}/>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {nearbyShops: state.nearbyShops}
};

export default connect(mapStateToProps, {fetchNearbyShops})(NearbyShopsList);