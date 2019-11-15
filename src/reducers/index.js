import {combineReducers} from "redux";
import nearbyShopsReducer from "./nearbyShopsReducer";


export default combineReducers({
  nearbyShops: nearbyShopsReducer
});