import { ShoppingCart } from 'phosphor-react'
import { CartButton, CartCount } from './style'

export function CartControl() {
  return (
    <CartButton title="Ir para o carrinho">
      <ShoppingCart size={22} weight="fill" />
      <CartCount>3</CartCount>
    </CartButton>
  )
}
