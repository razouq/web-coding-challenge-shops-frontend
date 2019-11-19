import {
  FETCH_NEARBY_SHOPS,
  LIKE_DISLIKE_SHOP,
  LOADING_NEARBY_SHOPS,
  FETCH_MORE_NEARBY_SHOPS, CLEAN_NEARBY_SHOPS_LIST
} from "../actions/types";

const initialState = {
  shops: [],
  page: 1,
  loading: false,
  hasMore: true
};

export default (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_NEARBY_SHOPS:
      return {
        ...state,
        shops: [...state.shops, ...action.payload],
        loading: false
      };
    case FETCH_MORE_NEARBY_SHOPS:
      return {
        ...state,
        shops: [...state.shops, ...action.payload]
      };
    case LOADING_NEARBY_SHOPS:
      return {
        ...state,
        loading: action.payload.loading,
        page: action.payload.page
      };
    case LIKE_DISLIKE_SHOP:
      return {
        ...state,
        shops: state.shops.filter(shop => shop.id !== action.payload)
      };
    case CLEAN_NEARBY_SHOPS_LIST:
      return {
        ...state,
        shops: []
      };
    default:
      return state;
  }
};
