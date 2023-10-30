import { render, screen } from '@testing-library/react'
import { Orders } from '../orders'
import {
  ProductsContext,
  ProductsContextType,
} from '../../../../context/ProductsContext'
import '@testing-library/jest-dom'
const products = [
  {
    id: 'e1f7a333-bea7-4b12-aa57-e11f619781b9',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    priceInCents: 990,
    imgUrl: '/coffes/Expresso.png',
    tags: ['Tradicional'],
    qtd: 2,
  },
]
const renderComponent = () => {
  render(
    <ProductsContext.Provider
      value={{ products } as unknown as ProductsContextType}
    >
      <Orders />
    </ProductsContext.Provider>,
  )
}
describe('Orders', () => {
  it('should render correctly', () => {
    renderComponent()
    expect(screen.getByText(products[0].name)).toBeInTheDocument()
    expect(screen.queryByText('Expresso Americano')).not.toBeInTheDocument()
  })
})
