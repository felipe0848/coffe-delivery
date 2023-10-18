import { ShoppingCart } from 'phosphor-react'
import { CartButton, CartCount } from './style'
import { useContext } from 'react'
import { ProductsContext } from '../../../../context/ProductsContext'

export function CartControl() {
  const { products } = useContext(ProductsContext)
  return (
    <CartButton title="Ir para o carrinho">
      <ShoppingCart size={22} weight="fill" />
      {products.length > 0 ? (
        <CartCount>{products.length}</CartCount>
      ) : (
        <span></span>
      )}
    </CartButton>
  )
}
