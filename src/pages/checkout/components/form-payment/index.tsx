import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  FormPaymentContainer,
  PaymentHeader,
  PaymentContent,
  OptionPayment,
} from './styles'

export function FormPayment() {
  return (
    <FormPaymentContainer>
      <PaymentHeader>
        <CurrencyDollar size={22} />
        <div>
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentHeader>

      <PaymentContent>
        <OptionPayment type="button">
          <CreditCard size={16} />
          <p>Cartão de crédito</p>
        </OptionPayment>
        <OptionPayment type="button">
          <Bank size={16} />
          <p>Cartão de débito</p>
        </OptionPayment>
        <OptionPayment type="button">
          <Money size={16} />
          <p>Dinheiro</p>
        </OptionPayment>
      </PaymentContent>
    </FormPaymentContainer>
  )
}
