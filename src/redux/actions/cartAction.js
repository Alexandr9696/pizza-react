import {ADD_PIZZA_CART, CLEAR_CART, DECREASE_ITEM, INCREASE_ITEM, REMOVE_CART_ITEM} from "../actionTypes";

export const addPizzaToCart = (pizzaObj) => {
  return {
    type: ADD_PIZZA_CART,
    payload: pizzaObj
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  }
}

export const removeCartItem = (id) => {
  return {
    type: REMOVE_CART_ITEM,
    payload: id
  }
}

export const increaseItem = (id) => {
  return {
    type: INCREASE_ITEM,
    payload: id
  }
}

export const decreaseItem = (id) => {
  return {
    type: DECREASE_ITEM,
    payload: id
  }
}