import {combineReducers} from "redux";
import nearbyShopsReducer from "./nearbyShopsReducer";
import preferredShopsReducer from "./preferredShopsReducer";
import securityReducer from "./securityReducer";
import errorRegisterReducer from "./errorRegisterReducer";
import errorLoginReducer from "./errorLoginReducer";

export default combineReducers({
  nearbyShops: nearbyShopsReducer,
  preferredShops: preferredShopsReducer,
  security: securityReducer,
  errorsRegister: errorRegisterReducer,
  errorsLogin: errorLoginReducer
});