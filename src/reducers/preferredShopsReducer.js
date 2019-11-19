import {
  FETCH_MORE_PREFERRED_SHOPS,
  FETCH_PREFERRED_SHOPS,
  CLEAN_PREFERRED_SHOPS_LIST,
  LOADING_PREFERRED_SHOPS,
  REMOVE_SHOP
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
    case FETCH_PREFERRED_SHOPS:
      return {
        ...state,
        shops: [...state.shops, ...action.payload],
        loading: false
      };
    case FETCH_MORE_PREFERRED_SHOPS:
      return {
        ...state,
        shops: [...state.shops, ...action.payload]
      };
    case LOADING_PREFERRED_SHOPS:
      return {
        ...state,
        loading: action.payload.loading,
        page: action.payload.page
      };
    case REMOVE_SHOP:
      return {
        ...state,
        shops: state.shops.filter(shop => shop.id !== action.payload)
      };
    case CLEAN_PREFERRED_SHOPS_LIST:
      return {
        ...state,
        shops: []
      };
    default:
      return state;
  }
};