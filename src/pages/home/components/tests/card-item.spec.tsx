import { fireEvent, render, screen } from '@testing-library/react'
import { CardItem } from '../Card-item'
import '@testing-library/jest-dom'
import {
  ProductsContext,
  ProductsContextType,
} from '../../../../context/ProductsContext'

const item = {
  id: 'e1f7a333-bea7-4b12-aa57-e11f619781b9',
  name: 'Expresso Tradicional',
  description: 'O tradicional café feito com água quente e grãos moídos',
  priceInCents: 990,
  imgUrl: '/coffes/Expresso.png',
  tags: ['Tradicional'],
}

const addInCart = jest.fn()
const renderComponent = () => {
  render(
    <ProductsContext.Provider
      value={{ addInCart } as unknown as ProductsContextType}
    >
      <CardItem item={item} />
    </ProductsContext.Provider>,
  )
}
describe('CardItem', () => {
  it('should render correctly', () => {
    renderComponent()
    expect(screen.getByText(item.name)).toBeInTheDocument()
    expect(screen.getByText(item.description)).toBeInTheDocument()
    expect(screen.getByText(item.tags[0])).toBeInTheDocument()
    expect(screen.getByTitle('Adicionar ao carrinho')).toBeInTheDocument()
    expect(screen.getByTestId('InputQTD')).toBeInTheDocument()
  })
  it('should add item in cart', () => {
    renderComponent()
    const btnAddCart = screen.getByTitle('Adicionar ao carrinho')
    fireEvent.click(btnAddCart)
    const product = {
      id: item.id,
      qtd: 1,
    }
    expect(addInCart).toHaveBeenCalledWith(product)
  })
})
