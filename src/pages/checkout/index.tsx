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
import { formDeliverySchema } from './validation/zod'
import { toast } from 'react-toastify'

export type formDeliveryData = z.infer<typeof formDeliverySchema>

export function Checkout() {
  const DeliveryForm = useForm<formDeliveryData>({
    resolver: zodResolver(formDeliverySchema),
  })
  const { handleSubmit } = DeliveryForm
  const navigate = useNavigate()
  const { addNewAdress, clearCart } = useContext(ProductsContext)

  function handleNewOrder(data: formDeliveryData) {
    navigate('/checkout/success')
    addNewAdress(data)
    clearCart()
    toast.success('Compra realizada ')
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
