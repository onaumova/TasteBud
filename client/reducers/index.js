import { combineReducers } from "redux";
import reducers from "./reducers.js";
//combine all the reducers

const rootReducer = combineReducers({
  reducers:reducers
});

export default rootReducer;
