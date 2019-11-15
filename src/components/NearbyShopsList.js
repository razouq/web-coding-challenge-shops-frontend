import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNearbyShops} from "../actions";


class NearbyShopsList extends Component {

  componentDidMount() {
    this.props.fetchNearbyShops();
    console.log(this.props.nearbyShops);
  }

  render() {
    return (
      <div>
        NearbyShopsList
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {nearbyShops: state.nearbyShops}
};

export default connect(mapStateToProps, {fetchNearbyShops})(NearbyShopsList);