import { CartBtn } from "../cart-btn/CartBtn"
import { Logo } from "../logo/Logo"

import "./Header.scss"

function Header() {
  return (
    <header className="Header">
      <Logo />
      <CartBtn />
    </header>
  )
}

export {Header}