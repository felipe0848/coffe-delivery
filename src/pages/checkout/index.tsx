import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'
import { InputQtd } from '../home/components/input-qtd'
import {
  AsideContainer,
  ButtonSubmit,
  CepInput,
  CheckoutCoffeCard,
  CheckoutCoffeList,
  CityInput,
  ComplementInput,
  FormContainer,
  FormHeaderContainer,
  InputsContainer,
  MainCheckoutContainer,
  NeighborhoodInput,
  NumberInput,
  PaymentContainer,
  StreetInput,
  SummaryOrders,
  UFInput,
} from './style'

export function Checkout() {
  return (
    <form>
      <MainCheckoutContainer>
        <section>
          <h3>Complete seu pedido</h3>
          <FormContainer>
            <FormHeaderContainer>
              <MapPinLine size={22} />
              <div>
                <h4>Endereço de entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeaderContainer>
            <InputsContainer>
              <CepInput type="text" placeholder="CEP" />
              <StreetInput type="text" placeholder="Rua" />
              <NumberInput type="Number" placeholder="Número" />
              <ComplementInput type="text" placeholder="Complemento" />
              <NeighborhoodInput type="text" placeholder="Bairro" />
              <CityInput type="text" placeholder="Cidade" />
              <UFInput type="text" placeholder="UF" />
            </InputsContainer>
          </FormContainer>
          <FormContainer>
            <FormHeaderContainer>
              <CurrencyDollar size={22} />
              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </FormHeaderContainer>

            <PaymentContainer>
              <button type="button">
                <CreditCard size={16} />
                <p>Cartão de crédito</p>
              </button>
              <button type="button">
                <Bank size={16} />
                <p>Cartão de débito</p>
              </button>
              <button type="button">
                <Money size={16} />
                <p>Dinheiro</p>
              </button>
            </PaymentContainer>
          </FormContainer>
        </section>
        <aside>
          <h3>Cafés selecionados</h3>
          <AsideContainer>
            <CheckoutCoffeList>
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
            </CheckoutCoffeList>
            <SummaryOrders>
              <li>
                <p>Total de itens</p>
                <span>R$ 18,80</span>
              </li>
              <li>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </li>
              <li>
                <strong>Total</strong>
                <strong>
                  <span>R$ 22,30</span>
                </strong>
              </li>
            </SummaryOrders>
            <ButtonSubmit type="submit">Confirmar Pedido</ButtonSubmit>
          </AsideContainer>
        </aside>
      </MainCheckoutContainer>
    </form>
  )
}
