// initial state and all the reducers
import * as types from "../actions/actionTypes.js";

const initialState = {
  input: "",
  category: "movie",
  recs: [],
  favs: []
};

const reducers = (state = initialState, action) => {
  let recs;
  switch (action.type) {
    case types.CHANGE_CATEGORY:
      return { ...state, category: action.payload };

    case types.SET_INPUT:
      return { ...state, input: action.payload };

    case types.SET_RECOMMENDATIONS:
      return { ...state, recs: action.payload };

    case types.SET_FAVORITES:
      return { ...state, favs: action.payload };

    default:
      return state;
  }
};

export default reducers;
