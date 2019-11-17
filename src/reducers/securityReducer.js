import {SET_CURRENT_USER} from "../actions/types";

const initialState = {
  validToken: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        validToken: !!action.payload,
        user: action.payload
      };
    default:
      return state;
  }
}