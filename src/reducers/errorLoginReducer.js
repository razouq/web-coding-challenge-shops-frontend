import {ERRORS_LOGIN, CLEAN_ERRORS_LOGIN} from "../actions/types";

const initialState = {
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERRORS_LOGIN:
      return {
        errors: {...state.errors, ...action.payload}
      };
    case CLEAN_ERRORS_LOGIN:
      return {
        errors: []
      };
    default:
      return state;
  }
}