import React, {useCallback} from "react";
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategories} from "../redux/actions/filtersAction";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name: 'популярности', type: 'popular'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'alphabet'}
]


const Home = () => {

  const dispatch = useDispatch()

  const items = useSelector(({pizzas}) => pizzas.items)

  const onSelectCategory = useCallback(index => {
    dispatch(setCategories(index));
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
        items.map((item, index) => {
          return (
            <PizzaBlock key={item.id} {...item}/>
          )
        })
        }
      </div>
    </div>
  )
}

export default Home