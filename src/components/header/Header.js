import { CartBtn } from "../cart-btn/CartBtn"
import { Logo } from "../logo/Logo"

import "./Header.scss"

function Header({cartCount, cartPrice}) {
  return (
    <header className="Header">
      <div class="container">
        <Logo />
        <CartBtn cartCount={cartCount} cartPrice={cartPrice} />
      </div>
    </header>
  )
}

export {Header}