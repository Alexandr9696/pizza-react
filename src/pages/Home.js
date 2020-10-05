import React, {useCallback, useEffect} from "react";
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategories, setSortBy} from "../redux/actions/filtersAction";
import {fetchPizzas} from "../redux/actions/pizzaAction";
import PizzaLoadingBlock from "../components/PizzaBlock/PizzaLoadingBlock";
import {addPizzaToCart} from "../redux/actions/cartAction";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const sortItems = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price', order: 'desc'},
  {name: 'алфавиту', type: 'name', order: 'asc'}
]

const Home = () => {

  const dispatch = useDispatch()

  const items = useSelector(({pizzas}) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const {categories, sortBy} = useSelector(({filters}) => filters)

  const onSelectCategory = useCallback(index => {
    dispatch(setCategories(index));
  }, [])

  const onSelectSortType = useCallback(obj => {
    dispatch(setSortBy(obj));
  }, [])

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  useEffect(() => {
    dispatch(fetchPizzas(categories, sortBy))
  }, [categories, sortBy])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategories={categories}
          onClickCategories={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          onClickSortType={onSelectSortType}
          activeSortType={sortBy.type}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ?
        items.map((item) => {
          return (
            <PizzaBlock
              onClickAddPizza={handleAddPizzaToCart}
              key={item.id}
              addedCount={ cartItems[item.id] && cartItems[item.id].items.length }
              {...item}
            />
          )
        })
          :
          Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index}/> )
        }
      </div>
    </div>
  )
}

export default Home