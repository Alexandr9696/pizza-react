import {SET_CATEGORIES, SET_SORT_BY} from "../actionTypes";

export const setSortBy = (name) => ({
  type: SET_SORT_BY,
  payload: name
})

export const setCategories = (catIndex) => {
  return {
  type: SET_CATEGORIES,
  payload: catIndex
}}