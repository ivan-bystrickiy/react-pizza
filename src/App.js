import { useState } from "react";
import {Switch, Route} from 'react-router-dom'
import { Cart } from "./components/cart/Cart";
import { Header } from "./components/header/Header";
import { PizzaList } from "./components/pizza-list/PizzaList";

function App() {
  
  // Состояние приложения
  const [state, setState] = useState({
    cart: {}
  })

  // Функции приложения
  const addToCart = (pizza) => {
    // 1. Проверяю есть ли в корзине эта пицца
    if (state.cart[pizza.id]) {
      // 2. Если уже есть: Увеличиваю count у этой пиццы на 1
      setState({
        ...state,
        cart: {
          ...state.cart,
          [pizza.id]: {
            ...state.cart[pizza.id],
            count: state.cart[pizza.id].count + 1,
          }
        }
      })
    } else {
      // 2. Если нету: Добавляю в корзину
      setState({
        ...state,
        cart: {
          ...state.cart,
          [pizza.id]: {
            count: 1,
            pizza: pizza
          }
        }
      })
    }
  }

  const deleteFromCart = (pizza, deleteAll = false) => {
    // 1. Проверяю есть ли в корзине эта пицца и кол-во больше 1
    if (state.cart[pizza.id] && state.cart[pizza.id].count > 1 && !deleteAll) {
      // 2. Если уже есть и кол-во больше 1: Уменьшаю count у этой пиццы на 1
      setState({
        ...state,
        cart: {
          ...state.cart,
          [pizza.id]: {
            ...state.cart[pizza.id],
            count: state.cart[pizza.id].count - 1,
          }
        }
      })
    } else {
      // 2. Если вдруг пиццы такой нету или кол-во = 1: Удаляю из корзины
      const newCart = {...state.cart}
      delete newCart[pizza.id]

      setState({
        ...state,
        cart: newCart
      })
    }
  }

  // Вычисления
  let cartPrice   = 0
  let cartLength  = 0
  // 1. Пройти циклом и сумировать
  Object.values(state.cart).forEach(function(cartItem) {
    cartPrice += cartItem.count * cartItem.pizza.price
    cartLength += cartItem.count
  })
  // 2. array.reduce()

  return (
    <div className="App">
      <Switch>
        <Route path="/cart">
          <Header cartCount={cartLength} cartPrice={cartPrice} />
          <Cart cart={state.cart} addToCart={addToCart} deleteFromCart={deleteFromCart} />
        </Route>
        <Route path="/">
          <Header cartCount={cartLength} cartPrice={cartPrice} />
          <PizzaList addToCart={addToCart} cart={state.cart} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
