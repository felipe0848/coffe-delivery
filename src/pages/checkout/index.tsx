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

const RegexCepValidate = /(^\d{8}$)|(^\d{5}-\d{3}$)/
const UFArray = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MS',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
] as const

const formSchema = z.object({
  CEP: z.string().refine((val) => val.match(RegexCepValidate), {
    message: 'Cep inválido, Ex:(12345-123 ou 12345678)',
  }),
  Street: z.string().min(1, 'O campo Rua é Obrigatório'),
  Number: z.coerce.number().min(1, 'O número não pode ser negativo'),
  Complement: z.string().optional(),
  Neighborhood: z.string().min(1, 'O campo Bairro é Obrigatório'),
  City: z.string().min(1, 'O campo Cidade é Obrigatório'),
  UF: z
    .string()
    .min(2, 'O campo UF é Obrigatório')
    .max(2, 'O campo UF é tem apenas 2 caracteres')
    .transform((val) => val.toUpperCase())
    .refine((val) => UFArray.includes(val), {
      message: 'UF não encontrado',
    }),
  Payment: z.string().min(1, 'Escolha uma opção de pagamento'),
})

export type formDeliveryData = z.infer<typeof formSchema>

export function Checkout() {
  const DeliveryForm = useForm<formDeliveryData>({
    resolver: zodResolver(formSchema),
  })
  const { handleSubmit } = DeliveryForm
  const navigate = useNavigate()
  const { addNewAdress, clearCart } = useContext(ProductsContext)

  function handleNewOrder(data: formDeliveryData) {
    navigate('/checkout/success')
    addNewAdress(data)
    clearCart()
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
