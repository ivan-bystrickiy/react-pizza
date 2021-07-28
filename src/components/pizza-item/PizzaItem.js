import './PizzaItem.scss'
import { Btn } from '../btn/Btn'

function PizzaItem(props) {
  const { pizza, addToCart, cart = [] } = props

  const cartData = cart[pizza.id]

  return (
    <div className="PizzaItem">
      <img className="PizzaItem__img" src={pizza.image} />
      <h3 className="PizzaItem__name">{pizza.name}</h3>
      <div className="PizzaItem__controls">
        <strong className="PizzaItem__price">от {pizza.price} ₽</strong>
        <Btn style="outline" onClick={() => addToCart(pizza)}>
          <span>+ Добавить</span>
          {cartData && (
            <span className="PizzaItem__count">
              {cartData.count}
            </span>
          )}
        </Btn>
      </div>
    </div>
  )
}

export { PizzaItem }