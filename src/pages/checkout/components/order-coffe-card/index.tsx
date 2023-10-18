import { Trash } from 'phosphor-react'
import { InputQtd } from '../../../../components/input-qtd'
import { CheckoutCoffeCard } from './styles'
import {
  ProductType,
  ProductsContext,
} from '../../../../context/ProductsContext'
import { formatPriceInReais } from '../../../../utils/formatPriceInReais'
import { useContext } from 'react'

interface OrderCoffeCardProps {
  item: ProductType
}

export function OrderCoffeCard({ item }: OrderCoffeCardProps) {
  const { removeItemInCart } = useContext(ProductsContext)
  function handleDeleteItem() {
    removeItemInCart(item.id)
  }
  return (
    <CheckoutCoffeCard>
      <div>
        <img src={item.imgUrl} alt="" />
        <div>
          <strong>{item.name}</strong>
          <div>
            <InputQtd />
            <button type="button" onClick={handleDeleteItem}>
              <Trash />
              <p>Remover</p>
            </button>
          </div>
        </div>
      </div>
      <span>R$ {formatPriceInReais(item.priceInCents)}</span>
    </CheckoutCoffeCard>
  )
}
