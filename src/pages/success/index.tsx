import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import IllustrationDelivery from '../../assets/Illustration-delivery.svg'
import {
  DeliveryInfos,
  SpanIcon,
  SuccessContainer,
  SuccessTextSection,
} from './style'
export function SuccessPage() {
  return (
    <SuccessContainer>
      <SuccessTextSection>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <DeliveryInfos>
          <div>
            <SpanIcon $color="purple">
              <MapPin weight="fill" size={16} />
            </SpanIcon>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div>
            <SpanIcon $color="yellow">
              <Clock weight="fill" size={16} />
            </SpanIcon>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div>
            <SpanIcon $color="yellow-dark">
              <CurrencyDollar weight="bold" size={16} />
            </SpanIcon>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </DeliveryInfos>
      </SuccessTextSection>
      <div>
        <img src={IllustrationDelivery} alt="" />
      </div>
    </SuccessContainer>
  )
}
