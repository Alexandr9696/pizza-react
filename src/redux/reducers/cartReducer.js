import {ADD_PIZZA_CART, CLEAR_CART, DECREASE_ITEM, INCREASE_ITEM, REMOVE_CART_ITEM} from "../actionTypes";

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

// суммирование цен в каждом объекте
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {

      const currentPizzaItems = !state.items[action.payload.id]
        // если в объекте items нет ключа с id добавляемого объекта то возращаем массиив с объектом
        ? [action.payload]
        // если есть, тогда клонируем массив в объекте под этим ключом и добавляем новый объект в массив
        : [...state.items[action.payload.id].items, action.payload]

      const newItems = {
        // клонируем объект
        ...state.items,
        // в объекте под ключом id
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        }
      };

      // общее количество пицц
      const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
      // общая цена пицц
      const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice
      }
    }

    // очистка корзины
    case CLEAR_CART: {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      }
    }

    // удаление одной пиццы
    case REMOVE_CART_ITEM: {
      // клонирование объекта с пиццами
      const newItems = {
        ...state.items
      }
      // цена пицц(ы) по которым(ой) кликнули
      const currentTotalPrice = newItems[action.payload].totalPrice
      // количество пицц
      const currentTotalCount = newItems[action.payload].items.length
      // удаление элемента в объекте под ключом id выбранной пиццы
      delete newItems[action.payload]

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount
      }
    }

    case INCREASE_ITEM: {

      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }

      const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
      const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice
      }
    }

    case DECREASE_ITEM: {
      // старый массив с объектами по заданному ключу
      const oldItems = state.items[action.payload].items
      // новый массив (удаление элемента[0] в массиве, если его длинна больше 1
      const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }

      const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0)
      const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0)

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice
      }
    }

    default:
      return state
  }
}

export default cartReducer;