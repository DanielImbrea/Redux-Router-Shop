import { combineReducers } from "redux";
import Identity from "./reducerUserIdentity";

const allReducers = combineReducers({
  identity: Identity,
});
export default allReducers;
