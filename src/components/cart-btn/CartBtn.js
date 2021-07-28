import CartImg from '../../images/icons/cart.svg'
import { Btn } from '../btn/Btn'
import './CartBtn.scss'

function CartBtn({cartCount, cartPrice}) {
  return (
    <Btn className="CartBtn" to="/cart" style={{textDecoration: 'none'}}>
      <span className="CartBtn__price">{cartPrice} ₽</span>
      <img className="CartBtn__icon" src={CartImg} />
      <span className="CartBtn__count">{cartCount}</span>
    </Btn>
  )
}

export {CartBtn}