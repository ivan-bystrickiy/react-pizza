import './PizzaItem.scss'
import { Btn } from '../btn/Btn'

function PizzaItem(props) {
  const { data, addToCart, cart = [] } = props

  const isAddedToCart = !!cart.find(pizza => pizza.id === data.id)

  return (
    <div className="PizzaItem">
      <img className="PizzaItem__img" src={data.image} />
      <h3 className="PizzaItem__name">{data.name}</h3>
      <div className="PizzaItem__controls">
        <strong className="PizzaItem__price">от {data.price} ₽</strong>
        {isAddedToCart ?
          <Btn style="fill">Добавлено</Btn> :
          <Btn style="outline" onClick={() => addToCart(data)}>+ Добавить</Btn>
        }
      </div>
    </div>
  )
}

export { PizzaItem }