import cartImg from '../../images/icons/cart-black.svg'
import basketImg from '../../images/icons/basket.svg'
import arrowLeftImg from '../../images/icons/arrow-left.svg'
import emptyCartImg from '../../images/empty-cart.svg'
import { Btn } from '../btn/Btn'

import "./Cart.scss"
import { CartItem } from '../cart-item/CartItem'
import { Link } from 'react-router-dom'

function Cart({cart, addToCart, deleteFromCart}) {
  if (!Object.keys(cart).length) {
    return (
      <div className="container">
        <div className="Cart" style={{textAlign: 'center'}}>
          <Link to="/">
            <img src={emptyCartImg} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="Cart">
        <div className="Cart__title-wrap">
          <div className="Cart__title">
            <img src={cartImg} />
            <h1>Корзина</h1>
          </div>
          <Btn className="Cart__clear-btn">
            <img src={basketImg} />
            <span>Очистить корзину</span>
          </Btn>
        </div>
        <div className="Cart__list">
          {Object.values(cart)
            .map(cartItem => (
              <CartItem
                item={cartItem}
                addToCart={addToCart}
                deleteFromCart={deleteFromCart}
                key={cartItem.pizza.id}
              />
            ))}
        </div>
        <div className="Cart__summary">
          <div className="Cart__count">
            Всего пицц: <b>3 шт.</b>
          </div>
          <div className="Cart__sum">
            Сумма заказа: <b>900 ₽</b>
          </div>
        </div>
        <div className="Cart__actions">
          <Btn className="Cart__back" to="/">
            <img src={arrowLeftImg} />
            <span>Вернуться назад</span>
          </Btn>
          <Btn>Оплатить сейчас</Btn>
        </div>
      </div>
    </div>
  )
}

export {Cart}
