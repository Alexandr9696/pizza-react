import {SET_LOADED, SET_PIZZAS} from "../actionTypes";
import axios from "axios";


export const setLoaded = payload => {
  return {
    type: SET_LOADED,
    payload,
  }
}

export const fetchPizzas = (categories, sortBy) => {
  return dispatch => {
    dispatch(setLoaded(false))

    console.log('cat', categories, 'sort', sortBy)

    axios.get(`http://localhost:3001/pizzas?${categories !== null ? `category=${categories}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
      .then(({data}) => {
        dispatch(setPizzas(data))
      })
  }
}

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items
})

