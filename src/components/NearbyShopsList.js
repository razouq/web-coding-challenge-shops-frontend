import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNearbyShops} from "../actions";
import NearbyShop from "./NearbyShop";



class NearbyShopsList extends Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchNearbyShops();
    console.log(this.listRef);
    window.addEventListener("scroll", this.handleScroll,false)
  }

  handleScroll() {
    console.log("hi");
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
      <div ref={this.listRef}>
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