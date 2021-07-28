import cartImg from '../../images/icons/cart-black.svg'
import basketImg from '../../images/icons/basket.svg'
import arrowLeftImg from '../../images/icons/arrow-left.svg'
import { Btn } from '../btn/Btn'

function Cart() {
  return (
    <div className="Cart container">
      <div className="Cart__title-wrap">
        <div className="Cart__title">
          <img src={cartImg} />
          <h1>Корзина</h1>
        </div>
        <Btn>
          <img src={basketImg} />
          <span>Очистить корзину</span>
        </Btn>
      </div>
      <div className="Cart__list">
        Список пицц
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
        <Btn>
          <img src={arrowLeftImg} />
          <span>Вернуться назад</span>
        </Btn>
        <Btn>Оплатить сейчас</Btn>
      </div>
    </div>
  )
}

export {Cart}
