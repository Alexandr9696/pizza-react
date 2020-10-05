import {combineReducers} from "redux";
import filtersReducer from "./filtersReducer";
import pizzasReducer from "./pizzaReducer";
import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducer,
})

export default rootReducer;