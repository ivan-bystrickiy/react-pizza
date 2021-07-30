import { useEffect, useState } from "react"
import { api } from "../../api"
import { PizzaItem } from "../pizza-item/PizzaItem"
import './PizzaList.scss'

function PizzaList() {
  let [pizzas, setPizzas] = useState({
    loading: false,
    error: null,
    list: [],
  })

  useEffect(() => {
    loadPizzas()
  }, [])

  const loadPizzas = () => {
    setPizzas({
      loading: true,
      error: null,
      list: [],
    })
    api.getPizzas()
      .then(res => setPizzas({
        loading: false,
        error: null,
        list: res.pizzas
      }))
      .catch(err => setPizzas({
        loading: false,
        error: err.error,
        list: []
      }))
  }

  console.log(pizzas);

  if (pizzas.loading) return <div>Загрузка...</div>

  if (pizzas.error) return <div>Ошибка: {pizzas.error.code} - {pizzas.error.message}</div>

  return (
    <div className="PizzaList">
      <div className="container">
        <h1 className="PizzaList__title">Все пиццы</h1>

        <div className="PizzaList__wrap">
          {pizzas.list.map((pizzaData, idx) => (
            <PizzaItem pizza={pizzaData} key={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

export {PizzaList}