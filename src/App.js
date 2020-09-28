import React, {useEffect} from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";
import axios from 'axios'
import {setPizzas} from "./redux/actions/pizzaAction";
import {useDispatch} from "react-redux";


const App = () => {

  const dispatch = useDispatch()

  window.test = () => {
    axios.get('http://localhost:3000/db.json')
      .then(({data}) => {
        dispatch(setPizzas(data.pizzas))
      })
  }

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({data}) => {
        dispatch(setPizzas(data.pizzas))
      })
  }, [])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path='/' exact component={Home}/>}/>
        <Route path='/cart' exact component={Cart}/>
      </div>
    </div>
  )
}


export default App;