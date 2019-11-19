import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPreferredShops, fetchMorePreferredShops} from "../actions";
import PreferredShop from "./PreferredShop";

class PreferredShopsList extends Component {


  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    this.props.fetchPreferredShops();
    window.addEventListener("scroll", this.handleScroll,false);
    // window.addEventListener("click", this.handleScroll,false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
    // window.removeEventListener('click', this.handleScroll, false);
  }

  handleScroll() {
    const {page} = this.props;
    const {innerHeight, scrollY} = window;
    const {offsetTop, scrollHeight} = this.listRef.current;
    if(innerHeight + scrollY > offsetTop + scrollHeight - 5) {
      this.props.fetchMorePreferredShops(page);
    }
  }

  renderList() {
    return this.props.preferredShops.map(shop => {
      return (
        <PreferredShop key={shop.id} shop={shop}/>
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
    preferredShops: state.preferredShops.shops,
    loading: state.preferredShops.loading,
    page: state.preferredShops.page
  }
};

export default connect(mapStateToProps, {fetchPreferredShops, fetchMorePreferredShops})(PreferredShopsList);