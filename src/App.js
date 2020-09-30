import React from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";


const App = () => {

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path='/' exact component={Home}/>
        <Route path='/cart' exact component={Cart}/>
      </div>
    </div>
  )
}


export default App;