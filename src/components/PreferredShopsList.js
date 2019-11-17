import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPreferredShops} from "../actions";
import PreferredShop from "./PreferredShop";

class PreferredShopsList extends Component {

  componentDidMount() {
    this.props.fetchPreferredShops();
  }

  renderList() {
    return this.props.preferredShops.map(shop => {
      return (
        <PreferredShop key={shop.id} shop={shop}/>
      )
    })
  }

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <div className="row">
              {this.renderList()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {preferredShops: state.preferredShops}
};

export default connect(mapStateToProps, {fetchPreferredShops})(PreferredShopsList);