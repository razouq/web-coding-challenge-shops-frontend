import {combineReducers} from "redux";
import nearbyShopsReducer from "./nearbyShopsReducer";
import preferredShopsReducer from "./preferredShopsReducer";


export default combineReducers({
  nearbyShops: nearbyShopsReducer,
  preferredShops: preferredShopsReducer
});