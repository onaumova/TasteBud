import * as types from "./actionTypes";

export const chnageCategory = category => ({
  type: types.CHANGE_CATEGORY,
  payload: category
});

export const setInput = input => ({
  type: types.SET_INPUT,
  payload: input
});

export const setRecommendations = recs => ({
  type: types.SET_RECOMMENDATIONS,
  payload: recs
})