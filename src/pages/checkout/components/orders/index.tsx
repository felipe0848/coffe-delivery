import {
  AsideContainer,
  ButtonSubmit,
  CheckoutCoffeList,
  SummaryOrders,
} from './styles'
import { OrderCoffeCard } from '../order-coffe-card'

export function Orders() {
  return (
    <AsideContainer>
      <CheckoutCoffeList>
        <OrderCoffeCard />
        <OrderCoffeCard />
      </CheckoutCoffeList>
      <SummaryOrders>
        <li>
          <p>Total de itens</p>
          <span>R$ 18,80</span>
        </li>
        <li>
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </li>
        <li>
          <strong>Total</strong>
          <strong>
            <span>R$ 22,30</span>
          </strong>
        </li>
      </SummaryOrders>
      <ButtonSubmit type="submit">Confirmar Pedido</ButtonSubmit>
    </AsideContainer>
  )
}
