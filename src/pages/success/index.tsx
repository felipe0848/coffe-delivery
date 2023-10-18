import IllustrationDelivery from '../../assets/Illustration-delivery.svg'
import { OrderInfo } from './components/order-info'
import { SuccessContainer, SuccessTextSection } from './style'
export function SuccessPage() {
  return (
    <SuccessContainer>
      <SuccessTextSection>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <OrderInfo />
      </SuccessTextSection>
      <div>
        <img src={IllustrationDelivery} alt="" />
      </div>
    </SuccessContainer>
  )
}
