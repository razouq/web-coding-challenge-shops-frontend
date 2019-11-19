import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchNearbyShops, fetchMoreNearbyShops} from "../actions";
import NearbyShop from "./NearbyShop";

class NearbyShopsList extends Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
      async position => {
        this.props.fetchNearbyShops({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        },
        ()=>console.log('failed'));
    window.addEventListener("scroll", this.handleScroll,false);
    // window.addEventListener("click", this.handleScroll,false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
    // window.removeEventListener('click', this.handleScroll, false);
  }


  handleScroll() {
    const {page, loading, hasMore} = this.props;
    const {innerHeight, scrollY} = window;
    const {offsetTop, scrollHeight} = this.listRef.current;
    // console.log(innerHeight + scrollY, offsetTop + scrollHeight, (innerHeight + scrollY > offsetTop + scrollHeight) && !loading);
    if((innerHeight + scrollY > offsetTop + scrollHeight - 5) && !loading && hasMore) {
      console.log("should load more ...");
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.props.fetchMoreNearbyShops(
            {
              lat: position.coords.latitude,
              lon: position.coords.longitude
            },
            page
          )
        },
        ()=>console.log('failed')
      )
    }
  }

  renderList() {
    return this.props.nearbyShops.map(shop => {
      return (
          <NearbyShop key={shop.id} shop={shop}/>
      )
    })
  }

  render() {
    const {loading} = this.props;
    return (
      <div ref={this.listRef}>
        <div className="container">
          <div className="row">
            {this.renderList()}
          </div>
        </div>
        {
          loading &&
            <div>
              <h1 className="text-center">LOADING ...</h1>
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nearbyShops: state.nearbyShops.shops,
    loading: state.nearbyShops.loading,
    page: state.nearbyShops.page,
    hasMore: state.nearbyShops.hasMore
  }
};

export default connect(mapStateToProps, {fetchNearbyShops, fetchMoreNearbyShops})(NearbyShopsList);