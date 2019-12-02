import {SET_CURRENT_USER} from "../actions/types";

const initialState = {
  validToken: false,
  user: {}
};


const check = payload => {
  if(Object.keys(payload).length === 0) {
    return false;
  } else {
    return true;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: check(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}