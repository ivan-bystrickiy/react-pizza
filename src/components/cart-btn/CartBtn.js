import CartImg from '../../images/icons/cart.svg'
import { Btn } from '../btn/Btn'
import './CartBtn.scss'

function CartBtn() {
  return (
    <Btn className="CartBtn">
      <span className="CartBtn__price">520 ₽</span>
      <img className="CartBtn__icon" src={CartImg} />
      <span className="CartBtn__count">3</span>
    </Btn>
  )
}

export {CartBtn}