import {combineReducers} from "redux";
import nearbyShopsReducer from "./nearbyShopsReducer";
import preferredShopsReducer from "./preferredShopsReducer";
import securityReducer from "./securityReducer";


export default combineReducers({
  nearbyShops: nearbyShopsReducer,
  preferredShops: preferredShopsReducer,
  security: securityReducer
});