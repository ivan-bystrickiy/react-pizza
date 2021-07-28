import { useState } from "react";
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
      <Header cartCount={cartLength} cartPrice={cartPrice} />
      <PizzaList addToCart={addToCart} cart={state.cart} />
    </div>
  );
}

export default App;
