import {SET_CATEGORIES, SET_SORT_BY} from "../actionTypes";

export const setSortBy = ({type, order}) => ({
  type: SET_SORT_BY,
  payload: {type, order}
})

export const setCategories = (catIndex) => {
  return {
  type: SET_CATEGORIES,
  payload: catIndex
}}