import { combineReducers } from "redux";
import Identity from "./reducerUserIdentity";
import activeItem from "./activeItemId";

const allReducers = combineReducers({
  identity: Identity,
  activeItem: activeItem,
});
export default allReducers;
