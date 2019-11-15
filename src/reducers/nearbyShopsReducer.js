import {FETCH_NEARBY_SHOPS, LIKE_SHOP} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_NEARBY_SHOPS:
      return action.payload;
    default:
      return state;
  }
};
