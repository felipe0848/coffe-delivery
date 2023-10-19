import {
  AsideContainer,
  ButtonSubmit,
  CheckoutCoffeList,
  SummaryOrders,
} from './styles'
import { OrderCoffeCard } from '../order-coffe-card'
import { useContext } from 'react'
import { ProductsContext } from '../../../../context/ProductsContext'
import { formatPriceInReais } from '../../../../utils/formatPriceInReais'

export function Orders() {
  const { products } = useContext(ProductsContext)
  const subtotalInCents = products.reduce(
    (sum, current) => (sum += current.priceInCents * current.qtd),
    0,
  )
  const deliveryFeeInCents = subtotalInCents > 4000 ? 0 : 350
  const TotalInCents = subtotalInCents + deliveryFeeInCents
  return (
    <AsideContainer>
      <CheckoutCoffeList>
        {products.map((product) => (
          <OrderCoffeCard key={product.id} item={product} />
        ))}
      </CheckoutCoffeList>
      <SummaryOrders>
        <li>
          <p>Total de itens</p>
          <span>R$ {formatPriceInReais(subtotalInCents)}</span>
        </li>
        <li>
          <p>Entrega</p>
          <span>R$ {formatPriceInReais(deliveryFeeInCents)}</span>
        </li>
        <li>
          <strong>Total</strong>
          <strong>
            <span>R$ {formatPriceInReais(TotalInCents)}</span>
          </strong>
        </li>
      </SummaryOrders>
      <ButtonSubmit type="submit">Confirmar Pedido</ButtonSubmit>
    </AsideContainer>
  )
}
