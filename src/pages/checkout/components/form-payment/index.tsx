import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  FormPaymentContainer,
  PaymentHeader,
  PaymentContent,
  OptionPayment,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../styles'
import { formDeliveryData } from '../..'

export function FormPayment() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<formDeliveryData>()
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
      <div>
        <PaymentContent>
          <OptionPayment
            onClick={() =>
              setValue('Payment', 'Cartão de crédito', { shouldValidate: true })
            }
            type="button"
          >
            <CreditCard size={16} />
            <p>Cartão de crédito</p>
          </OptionPayment>
          <OptionPayment
            onClick={() =>
              setValue('Payment', 'Cartão de débito', { shouldValidate: true })
            }
            type="button"
          >
            <Bank size={16} />
            <p>Cartão de débito</p>
          </OptionPayment>
          <OptionPayment
            onClick={() =>
              setValue('Payment', 'Dinheiro', { shouldValidate: true })
            }
            type="button"
          >
            <Money size={16} />
            <p>Dinheiro</p>
          </OptionPayment>
        </PaymentContent>
        {errors.Payment?.message && (
          <ErrorMessage>* {errors.Payment?.message}</ErrorMessage>
        )}
      </div>
      <input {...register('Payment')} type="text" hidden />
    </FormPaymentContainer>
  )
}
