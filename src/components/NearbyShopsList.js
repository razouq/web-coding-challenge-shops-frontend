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
      console.log(position.coords.longitude);
        this.props.fetchNearbyShops({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
        },
        ()=>console.log('failed'));
    window.addEventListener("scroll", this.handleScroll,false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll() {
    const {page} = this.props;
    const {innerHeight, scrollY} = window;
    const {offsetTop, scrollHeight} = this.listRef.current;
    // console.log(innerHeight + scrollY, offsetTop + scrollHeight);
    if(innerHeight + scrollY > offsetTop + scrollHeight - 5) {
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
  }
};

export default connect(mapStateToProps, {fetchNearbyShops, fetchMoreNearbyShops})(NearbyShopsList);