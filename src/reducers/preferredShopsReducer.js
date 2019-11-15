import {FETCH_PREFERRED_SHOPS} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PREFERRED_SHOPS:
      return action.payload;
    default:
      return state;
  }
}