import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { DeliveryInfos, SpanIcon } from './styles'
import { useContext } from 'react'
import { ProductsContext } from '../../../../context/ProductsContext'

export function OrderInfo() {
  const { adress } = useContext(ProductsContext)
  if (adress)
    return (
      <DeliveryInfos>
        <div>
          <SpanIcon $color="purple">
            <MapPin weight="fill" size={16} />
          </SpanIcon>
          <div>
            <p>
              Entrega em{' '}
              <strong>
                {adress.Street}, {adress.Number}
              </strong>
            </p>
            <p>
              {adress.Neighborhood} - {adress.City}, {adress.UF}
            </p>
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
            <strong>{adress.Payment}</strong>
          </div>
        </div>
      </DeliveryInfos>
    )
}
