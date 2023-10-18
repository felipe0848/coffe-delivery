import { MainCheckoutContainer } from './styles'
import { FormAdress } from './components/form-adress'
import { FormPayment } from './components/form-payment'
import { Orders } from './components/orders'

export function Checkout() {
  return (
    <form>
      <MainCheckoutContainer>
        <section>
          <h3>Complete seu pedido</h3>
          <FormAdress />
          <FormPayment />
        </section>

        <aside>
          <h3>Cafés selecionados</h3>
          <Orders />
        </aside>
      </MainCheckoutContainer>
    </form>
  )
}
