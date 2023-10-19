import { Trash } from 'phosphor-react'
import { InputQtd } from '../../../../components/input-qtd'
import { CheckoutCoffeCard } from './styles'
import {
  ProductType,
  ProductsContext,
} from '../../../../context/ProductsContext'
import { formatPriceInReais } from '../../../../utils/formatPriceInReais'
import { useContext, useState } from 'react'

interface OrderCoffeCardProps {
  item: ProductType
}

export function OrderCoffeCard({ item }: OrderCoffeCardProps) {
  const { removeItemInCart, updateQuantity } = useContext(ProductsContext)
  const [qtd, setQtd] = useState(item.qtd)
  function handleDeleteItem() {
    removeItemInCart(item.id)
  }
  function handleChangeQtd(value: number) {
    updateQuantity({ id: item.id, qtd: value })
    setQtd(value)
  }
  return (
    <CheckoutCoffeCard>
      <div>
        <img src={item.imgUrl} alt="" />
        <div>
          <strong>{item.name}</strong>
          <div>
            <InputQtd qtd={qtd} setQtd={handleChangeQtd} />
            <button type="button" onClick={handleDeleteItem}>
              <Trash />
              <p>Remover</p>
            </button>
          </div>
        </div>
      </div>
      <span>R$ {formatPriceInReais(item.priceInCents * item.qtd)}</span>
    </CheckoutCoffeCard>
  )
}
