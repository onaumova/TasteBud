//import createStore from redux;
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

// //create store using the function

const store = createStore(rootReducer, composeWithDevTools());

export default store;
