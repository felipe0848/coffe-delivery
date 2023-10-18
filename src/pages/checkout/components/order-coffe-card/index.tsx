import { Trash } from 'phosphor-react'
import { InputQtd } from '../../../../components/input-qtd'
import { CheckoutCoffeCard } from './styles'

export function OrderCoffeCard() {
  return (
    <CheckoutCoffeCard>
      <div>
        <img src="/coffes/Expresso.png" alt="" />
        <div>
          <strong>Expresso Tradicional</strong>
          <div>
            <InputQtd />
            <button>
              <Trash />
              <p>Remover</p>
            </button>
          </div>
        </div>
      </div>
      <span>R$ 9,90</span>
    </CheckoutCoffeCard>
  )
}
