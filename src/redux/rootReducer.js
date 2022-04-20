import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCreams/iceCreamReducer";

const combineReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export default combineReducer;
