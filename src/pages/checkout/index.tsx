import { MainCheckoutContainer } from './styles'
import { FormAdress } from './components/form-adress'
import { FormPayment } from './components/form-payment'
import { Orders } from './components/orders'

import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'

const formSchema = z.object({
  CEP: z.coerce
    .number()
    .min(10 ** 7, 'Deve haver no mínimo 8 números')
    .max(10 ** 8 - 1, 'Deve haver no máximo 8 números'),
  Street: z.string().min(1, 'O campo Rua é Obrigatório'),
  Number: z.coerce.number().min(1, 'O número não pode ser negativo'),
  Complement: z.string().optional(),
  Neighborhood: z.string().min(1, 'O campo Bairro é Obrigatório'),
  City: z.string().min(1, 'O campo Cidade é Obrigatório'),
  UF: z.string().min(1, 'O campo UF é Obrigatório'),
  Payment: z.string().min(1, 'Escolha uma opção de pagamento'),
})

export type formDeliveryData = z.infer<typeof formSchema>

export function Checkout() {
  const DeliveryForm = useForm<formDeliveryData>({
    resolver: zodResolver(formSchema),
  })
  const { handleSubmit } = DeliveryForm
  const navigate = useNavigate()
  const { AddNewAdress } = useContext(ProductsContext)

  function handleNewOrder(data: formDeliveryData) {
    navigate('/checkout/success')
    AddNewAdress(data)
  }
  return (
    <form onSubmit={handleSubmit(handleNewOrder)}>
      <MainCheckoutContainer>
        <section>
          <h3>Complete seu pedido</h3>
          <FormProvider {...DeliveryForm}>
            <FormAdress />
            <FormPayment />
          </FormProvider>
        </section>

        <aside>
          <h3>Cafés selecionados</h3>
          <Orders />
        </aside>
      </MainCheckoutContainer>
    </form>
  )
}
