import './PizzaItem.scss'
import {Btn} from '../btn/Btn'

function PizzaItem(props) {
  const { data } = props

  const addToCart = () => {
    console.log(data)
  }

  return (
    <div className="PizzaItem">
      <img className="PizzaItem__img" src={data.image} />
      <h3 className="PizzaItem__name">{data.name}</h3>
      <div className="PizzaItem__controls">
        <strong className="PizzaItem__price">от 395 ₽</strong>
        <Btn>+ Добавить</Btn>
      </div>
    </div>
  )
}

export {PizzaItem}