import {CLEAN_ERRORS_REGISTER, ERRORS_REGISTER} from "../actions/types";

const initialState = {
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERRORS_REGISTER:
      return {
        errors: {...state.errors, ...action.payload}
      };
    case CLEAN_ERRORS_REGISTER:
      return {
        errors: []
      };
    default:
      return state;
  }
}