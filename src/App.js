import { useState } from "react";
import { Header } from "./components/header/Header";
import { PizzaList } from "./components/pizza-list/PizzaList";

function App() {
  
  // Состояние приложения
  const [state, setState] = useState({
    cart: []
  })

  // Функции приложения
  const addToCart = (pizza) => {
    setState({
      ...state,
      cart: [...state.cart, pizza]
    })
  }

  // Вычисления
  let cartPrice = 0
  // 1. Пройти циклом и сумировать
  for (let i = 0; i < state.cart.length; i++) {
    cartPrice += state.cart[i].price
  }
  // 2. array.reduce()

  return (
    <div className="App">
      <Header cartCount={state.cart.length} cartPrice={cartPrice} />
      <PizzaList addToCart={addToCart} cart={state.cart} />
    </div>
  );
}

export default App;
