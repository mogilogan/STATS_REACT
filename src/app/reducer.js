import { combineReducers } from "redux";
import statReducer from "../features/statisticSlice";

export default combineReducers({
  stats: statReducer,
  //add future reducers here
});
