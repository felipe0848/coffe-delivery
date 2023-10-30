import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from '../header'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { ProductsContextProvider } from '../../context/ProductsContext'

const mockNavigate = jest.fn()
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}))
const RenderComponent = () => {
  render(
    <ProductsContextProvider>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </ProductsContextProvider>,
  )
}
describe('Header', () => {
  it('should render correctly', () => {
    RenderComponent()

    expect(screen.getByTestId('logo-anchor')).toBeInTheDocument()
    expect(screen.getByText('Campo Grande, MS')).toBeInTheDocument()
    expect(screen.getByTitle('Ir para o carrinho')).toBeInTheDocument()
  })
  it('should call navigate when hits the anchor logo', () => {
    RenderComponent()
    const logoAnchor = screen.getByTestId('logo-anchor')

    fireEvent.click(logoAnchor)
    expect(mockNavigate).toHaveBeenCalledWith('/', {
      preventScrollReset: undefined,
      relative: undefined,
      replace: true,
      state: undefined,
    })
  })
  it('should call navigate when hits the button cart', () => {
    RenderComponent()
    const btnCart = screen.getByTitle('Ir para o carrinho')

    fireEvent.click(btnCart)
    expect(mockNavigate).toHaveBeenCalledWith('/checkout', {
      preventScrollReset: undefined,
      relative: undefined,
      replace: false,
      state: undefined,
    })
  })
})
