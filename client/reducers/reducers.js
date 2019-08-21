// initial state and all the reducers
import * as types from "../actions/actionTypes.js";

const initialState = {
  input: "",
  category: "movie",
  recs: []
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CATEGORY:
      return {};

    case types.SET_INPUT:
      return {};

    case types.SET_RECOMMENDATIONS:
      return {};

    default:
      return state;
  }
};

export default reducers;
